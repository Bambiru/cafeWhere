import { HeaderBar } from '@/components/atoms';
import { AllHashtagList } from '@/components/organisms';
import { Link, useParams } from 'react-router-dom';

function ReviewHashTagPage() {
  const params = useParams();
  return (
    <div className="h-full min-h-svh">
      <HeaderBar name={'어떤 점이 좋았나요?'} showHomeBtn />
      <div className="ml-2 flex flex-col items-center">
        <AllHashtagList />
        <Link to={`/reviewWrite/${params.id}`}>
          <button
            type="button"
            className="mb-10 h-48pxr w-120pxr rounded-lg bg-[#654E3C] text-white"
          >
            다음
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ReviewHashTagPage;
