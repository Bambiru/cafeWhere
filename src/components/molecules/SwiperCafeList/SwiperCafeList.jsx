import { CategoryCafeList } from '@/components/molecules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperCafeList({ data }) {
  return (
    <div className="min-w-375pxr max-w-680pxr">
      {/* CategoryListName을 어디다 넣어야 할지는 페이지 만들때 고민 */}
      <Swiper
        className="mySwiper"
        slidesPerView={1.7}
        breakpoints={{
          375: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2.1,
            spaceBetween: 16,
          },
          680: {
            slidesPerView: 3.3,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Pagination]}
      >
        {/* 추후에 카테고리 별로 데이터 가져오기 수정 & 사진크기 수정 */}
        {data &&
          data.map((data) => (
            <SwiperSlide key={data.id}>
              <CategoryCafeList data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default SwiperCafeList;
