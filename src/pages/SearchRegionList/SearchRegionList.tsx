import { HeaderBar, TabBar, SelectRegion } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useCafeListStore, useRegionStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}
interface Place {
  x: number;
  y: number;
}
interface Callback {
  data: Place[];
  status: string;
}

interface Cafe {
  id: string;
}

function SearchRegionList() {
  const { region } = useRegionStore();
  const { setCafeList } = useCafeListStore();

  const cafeListData = sessionStorage.getItem('cafeList');
  const cafeList: Cafe[] = cafeListData ? JSON.parse(cafeListData) : [];
  const { kakao } = window;

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await pb.collection('cafe').getList(1, 50, {
        filter: `address~'${region}'`,
        sort: '-created',
      });

      setCafeList(resultList.items);
      sessionStorage.setItem('cafeList', JSON.stringify(resultList.items));
    };
    fetchData();

    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(`${region} 카페`, placesSearchCB);

    function placesSearchCB({ data, status }: Callback) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: Place) {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [region]);

  return (
    <>
      <div className="pb-32">
        <HeaderBar name={<SelectRegion />} showHomeBtn />

        <div id="map" className=" mb-4 h-237pxr w-full"></div>

        <div className="flex flex-col gap-3">
          {cafeList?.map((data) => <CafeListItem key={data.id} data={data} />)}
        </div>
      </div>
      <TabBar />
    </>
  );
}

export default SearchRegionList;
