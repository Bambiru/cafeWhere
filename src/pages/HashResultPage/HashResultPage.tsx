import { HeaderBar, TabBar } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useHashtagStore } from '@/store';

function HashResultPage() {
  const { searchHashtag } = useHashtagStore();
  console.log(searchHashtag);
  return (
    <div className="flex h-svh flex-col">
      <HeaderBar name="해시태그 검색" />
      <SearchBar />
      {searchHashtag.items?.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {searchHashtag.items.map((item) => (
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
export default HashResultPage;
