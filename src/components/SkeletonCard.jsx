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

{
  /* <div
          className="transition ease-in-out [&_div]:hover:-translate-y-2 [&_div]:hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/detail/${pokemon.id}`)}
        >
          <div className="w-[75px] bg-base-100 shadow rounded border border-gray-300 sm:w-[120px] md:w-[170px] ">
            <img
              src={pokemonData.img}
              alt={pokemonData.name}
              className="w-full"
            />
          </div>
          <h2 className="text-xs text-center">{pokemonData.name}</h2>
        </div> */
}
