import SwiperCafeList from '@/components/molecules/SwiperCafeList/SwiperCafeList';
import { HeaderBar, TabBar, Loading } from '@/components/atoms';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import { useSearchCafeListStore, useWordStore } from '@/store';
import useSearchTermStore from '@/store/useSearchTermStore';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

const spanStyle = 'flex flex-col py-4 px-5';

function SearchPage() {
  const { searchCafeList, setSearchCafeList } = useSearchCafeListStore();
  const { searchTerm } = useSearchTermStore();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  const { words } = useWordStore();

  const fetchData = async () => {
    setIsLoading(true);
    const filteredCafes = await pb.collection('cafe').getFullList({
      filter: `cafeName~'${searchTerm}'`,
      expand: 'hashtag',
    });
    setSearchCafeList(filteredCafes);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <>
      <section className="mx-auto h-svh w-full min-w-375pxr max-w-680pxr text-xs font-bold leading-5">
        <HeaderBar name="카페 검색하기" />
        <SearchBar />

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div>
              <span className={spanStyle}>최근 검색한 단어</span>
              <div className="mx-5 flex gap-3">
                {words.map((item) => (
                  <button className="rounded-lg border px-2 py-1">
                    {item} <span>x</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className={spanStyle}>최근 본 항목</span>
              <SwiperCafeList data={searchCafeList} />
            </div>
            <div>
              <span className={spanStyle}>카테고리별 추천</span>
              <SwiperCafeList data={searchCafeList} />
            </div>
            <div></div>
          </>
        )}
        <TabBar />
      </section>
    </>
  );
}

export default SearchPage;
