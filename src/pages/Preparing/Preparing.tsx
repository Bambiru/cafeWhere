import HeaderBar from '@/components/atoms/HeaderBar/HeaderBar';
import PreparingItem from '@/components/organisms/PreparingItem/PreparingItem';

function Preparing() {
  return (
    <div className="h-screen">
      <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr">
        <HeaderBar name={'돌아가기'} showHomeBtn={false} />
        <PreparingItem />
      </div>
    </div>
  );
}

export default Preparing;
