import { HeaderBar, TabBar } from '@/components/atoms';
import NoResult from '@/components/atoms/NoResult/NoResult';
import { useTabStore, useUserIdStore } from '@/store';
import pb from '@/utils/pocketbase';
import { RecordModel } from 'pocketbase';
import { useEffect, useState } from 'react';
import { SelectLoginPage } from '..';

function MyReviewPage() {
  // // const UserId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;
  const { userId } = useUserIdStore();
  const [reviewRecord, setReviewRecord] = useState<RecordModel[]>([]);
  const { setActiveTab } = useTabStore();

  const loginCheck = sessionStorage.getItem('token');
  const loginUserAuth = localStorage.getItem('pocketbase_auth');

  const loginUserId = loginUserAuth ? JSON.parse(loginUserAuth).model.id : [];
  const loginUserAuthId = loginCheck === 'login' ? loginUserId : userId;

  const handleReview = async () => {
    const records = await pb.collection('review').getList(1, 50, {
      sort: '-created',
      expand: 'hashtag',
      filter: `users="${loginUserAuthId}"`,
    });

    setReviewRecord(records.items);
  };

  useEffect(() => {
    handleReview();
    setActiveTab('review');
  }, []);

  return (
    <div className="h-svh pb-32">
      {loginCheck ? (
        <>
          <div className="px-6">
            <HeaderBar name={'내가 쓴 리뷰'} />

            <ul className="flex flex-col gap-2">
              {<NoResult>작성된 리뷰가 없습니다.</NoResult>}
            </ul>
          </div>
          <TabBar />
        </>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}

export default MyReviewPage;

export async function loader() {
  return await pb.collection('review').getList(1, 4, {
    sort: '-created',
  });
}
