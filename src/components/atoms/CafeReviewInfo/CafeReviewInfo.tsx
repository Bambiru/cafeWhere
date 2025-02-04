interface CafeReviewInfoProps {
  data: {
    score?: number;
    reviewQuantity: number;
  };
}

function CafeReviewInfo({ data }: CafeReviewInfoProps) {
  return (
    <p className="my-2 flex gap-2 text-13pxr">
      <span>☕ {data?.score?.toFixed(1) ?? ''}</span>
      <span>리뷰 {data.reviewQuantity}</span>
    </p>
  );
}

export default CafeReviewInfo;
