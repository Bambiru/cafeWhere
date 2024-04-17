interface RatingProps {
  rating: number;
  setRating: (value: number) => number;
}

function RatingScore({ rating, setRating }: RatingProps) {
  return (
    <div>
      <div className="text-center font-semibold"> 별점 {rating}</div>

      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <img
              src="/images/coffeepull1.svg"
              alt="filled coffee"
              className="h-6 w-6 cursor-pointer"
              key={i}
              onClick={() => {
                setRating(i + 1);
              }}
            />
          ) : (
            <img
              src="/images/coffeepull2.svg"
              alt="empty coffee"
              className="h-6 w-6 cursor-pointer"
              key={i}
              onClick={() => {
                setRating(i + 1);
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RatingScore;
