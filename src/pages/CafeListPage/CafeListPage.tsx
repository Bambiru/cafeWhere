import { HeaderBar, TabBar, Loading } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useCafeListStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  keyword: string;
  region: string;
};

function CafeListPage() {
  const { cafeList, setCafeList } = useCafeListStore();
  const { keyword, region } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resultList = await pb.collection('cafe').getList(1, 50, {
          filter: `category~'${keyword}' && address~'${region}'`,
        });
        console.log(resultList);
        setCafeList(resultList.items || []);
        sessionStorage.setItem(
          'cafeList',
          JSON.stringify(resultList.items || [])
        );
      } catch (error) {
        console.error(error);
        setCafeList([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [keyword, region]);

  return (
    <div className="flex h-svh flex-col gap-3 pb-32">
      <HeaderBar name={'카페리스트'} />
      {isLoading ? (
        <Loading />
      ) : cafeList && cafeList.length > 0 ? (
        cafeList.map((item) => <CafeListItem key={item.id} data={item} />)
      ) : (
        <NoResult>일치하는 카페가 없습니다.</NoResult>
      )}
      <TabBar />
    </div>
  );
}

export default CafeListPage;
