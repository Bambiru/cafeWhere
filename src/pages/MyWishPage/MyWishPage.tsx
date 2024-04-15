import { HeaderBar, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useTabStore } from '@/store';
import { useUserIdStore } from '@/store/useLoginStore';
import pb from '@/utils/pocketbase';
import { SetStateAction, useEffect, useState } from 'react';
import SelectLoginPage from '../SelectLoginPage/SelectLoginPage';

interface ResultList {
  items: SetStateAction<string[]>;
}

interface WishCafe {
  id: string;
  name: string;
}

function MyWishPage() {
  const { userId } = useUserIdStore();
  const [wishCafe, setWishCafe] = useState<WishCafe[]>([]);
  const loginCheck = sessionStorage.getItem('token');
  const { setActiveTab } = useTabStore();

  useEffect(() => {
    const fetchDeta = async () => {
      const resultList: ResultList = await pb
        .collection('wish')
        .getList(1, 50, {
          filter: `email~'${userId}'`,
        });

      setWishCafe(resultList.items as unknown as WishCafe[]);
      setActiveTab('wish');
    };
    fetchDeta();
  }, []);

  return (
    <div className="h-svh pb-32">
      {loginCheck ? (
        <>
          <HeaderBar name={'찜한 카페'} />
          {wishCafe.map((data) => (
            <CafeListItem data={data} />
          ))}
          <TabBar />
        </>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}

export default MyWishPage;
