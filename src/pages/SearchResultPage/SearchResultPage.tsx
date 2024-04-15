import { HeaderBar, TabBar } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useLoaderData } from 'react-router-dom';

interface Cafe {
  id: string;
  cafeName: string;
}

interface SearchResult {
  items: Cafe[];
}

interface Params {
  params: {
    keyword: string;
  };
}

function SearchResultPage() {
  const loadedData: SearchResult = useLoaderData() as SearchResult;
  const totalResults = loadedData.items.length;
  return (
    <div className="flex h-svh flex-col">
      <HeaderBar name="카페 검색하기" />
      <SearchBar />
      <div className="px-5 py-4">
        총 <strong>{totalResults}</strong>건이 검색되었습니다.
      </div>
      {loadedData.items.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {loadedData.items.map((item) => (
            <CafeListItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <NoResult>검색 결과가 없습니다.</NoResult>
      )}
      <TabBar />
    </div>
  );
}

export default SearchResultPage;

export const fetchSearch = async ({ params }: Params) => {
  const { keyword } = params;

  let data;

  if (keyword) {
    data = await pb.collection('cafe').getList(1, 10, {
      filter: `cafeName~"${keyword}"`,
      expand: 'hashtag, review',
    });
    console.log(data);
  } else {
    data = await pb.collection('cafe').getList(1, 10, {});
  }

  return data;
};
