import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div>
      <div>
        <Skeleton className="w-[75px] sm:w-[120px] md:w-[170px] h-[75px] sm:h-[120px] md:h-[170px]" />
      </div>
      <p>
        <Skeleton />
      </p>
    </div>
  );
};

export default SkeletonCard;