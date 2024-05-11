import { cn } from "@/utils/utils";
import { FaStar } from "react-icons/fa";

interface FixStarRatingProps {
  stars: number;
  className?: string;
}

const FixStarRating = ({ stars, className }: FixStarRatingProps) => {
  return (
    <div className={cn("flex justify-start max-w-lg ", className)}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
            />
            <div className="max-w-lg p-0 m-0">
              <FaStar
                size={20}
                color={ratingValue <= stars ? "#ffc107" : "#e4e5e9"}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FixStarRating;
