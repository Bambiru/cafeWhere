import { CategoryListName, HeaderBar, Loading } from '@/components/atoms';
import CafeReviewInfo from '@/components/atoms/CafeReviewInfo/CafeReviewInfo';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import ReviewButton from '@/components/atoms/ReviewButton/ReviewButton';
import Wish from '@/components/atoms/Wish/Wish';
import CafeInfoTab from '@/components/molecules/CafeInfoTab/CafeInfoTab';
import SwiperCafeList from '@/components/molecules/SwiperCafeList/SwiperCafeList';
import { DetailInfo, DetailReview } from '@/components/organisms';
import { useActiveTabStore, useCafeStore, useRegionStore } from '@/store';
import pb, { pbImg } from '@/utils/pocketbase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// type ParamsType = {
//   id: string;
// };

function DetailPage() {
  const { region } = useRegionStore();
  const { cafe, setCafe } = useCafeStore();
  const { activeTab } = useActiveTabStore();
  const { id } = useParams();
  // as ParamsType;
  const cafeList = sessionStorage.getItem('cafeList');
  const getCafeList = cafeList ? JSON.parse(cafeList) : [];
  const [isLoading, setIsLoading] = useState(true);

  const { kakao } = window;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await pb.collection('cafe').getOne(id, {
          expand: 'hashtag',
        });
        setCafe(response);
        console.log(response);
        sessionStorage.setItem('cafe', JSON.stringify(response));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (cafe?.cafeName) {
      kakao.maps.load(() => {
        const places = new kakao.maps.services.Places();
        const callback = (result, status) => {
          if (status === kakao.maps.services.Status.OK && result) {
            const staticMapContainer = document.getElementById('staticMap');
            const staticMapOption = {
              center: new kakao.maps.LatLng(result[0].y, result[0].x),
              level: 3,
              marker: {
                position: new kakao.maps.LatLng(result[0].y, result[0].x),
              },
            };
            new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
          }
        };
        places.keywordSearch(cafe?.cafeName, callback);
      });
    }
  }, [cafe?.cafeName, activeTab]);

  const imageURL = pbImg(
    cafe?.collectionId || '',
    cafe?.id || '',
    cafe?.mainImage || ''
  );

  return (
    <div className="h-full pb-12">
      {isLoading ? (
        <div className="flex min-h-svh justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <HeaderBar showHomeBtn />
          <div key={cafe?.id} className="mx-auto w-full">
            <img
              src={imageURL}
              alt={cafe?.cafeName}
              className="max-h-360pxr w-full"
            />
            <div className="w-full">
              <div className="flex items-start justify-between p-5">
                <div>
                  <h2 className="mb-2 text-xl font-semibold">
                    {cafe?.cafeName}
                  </h2>
                  <p className="mb-4 text-xs text-greyscale-70">
                    {cafe?.description}
                  </p>
                  <CafeReviewInfo data={cafe} />
                  <div>
                    {cafe?.expand
                      ? cafe?.expand.hashtag.map((item) => (
                          <Hashtag
                            key={item.id}
                            icon={item.icon}
                            keyword={item.keyword}
                          />
                        ))
                      : ''}
                  </div>
                </div>
                <Wish customSize="w-12 h-12" />
              </div>

              <CafeInfoTab />
              {activeTab === 'info' ? <DetailInfo /> : <DetailReview />}

              <div className="mt-12">
                <CategoryListName>{region} 카페 추천</CategoryListName>
                <SwiperCafeList data={getCafeList} />
              </div>
              {activeTab === 'review' && (cafe?.reviewQuantity || 0) > 0 ? (
                <ReviewButton />
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailPage;
