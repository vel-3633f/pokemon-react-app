import Skeleton from "react-loading-skeleton";

const SkeletonDetail = () => {
  return (
    <section>
      <div className="relative">
        <div className="w-screen bg-gray-100 flex flex-col items-center justify-center sm:flex-row">
          <Skeleton className="w-64 my-5 sm:w-56 sm:mr-7 lg:w-64 h-64 my-5 sm:h-56 sm:mr-7 lg:h-64" />
          <div className="w-11/12 bg-white rounded border-4 border-gray-400 shadow-2xl px-5 py-5 mb-5 sm:w-[300px] sm:border-none sm:py-10 lg:w-[430px] lg:px-16">
            <p className="font-bold text-lg sm:text-base lg:text-2xl mb-1 text-center sm:text-left">
              <Skeleton />
            </p>
            <p className="font-bold text-2xl sm:text-lg lg:text-3xl text-center sm:text-left">
              <Skeleton />
            </p>
            <p className="font-bold text-base sm:text-base lg:text-2xl text-gray-500 text-center sm:text-left">
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 sm:flex-row">
        <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl mb-5 sm:w-2/5 sm:text-base sm:mb-0 sm:mr-5 sm:h-[350px] lg:text-2xl lg:h-[400px]">
          <p className="mb-2">
            <Skeleton />
          </p>
          <div className="mb-2 flex items-center">
            <Skeleton />
          </div>
          <p className="mb-2">
            <Skeleton />
          </p>
          <p className="mb-2">
            <Skeleton />
          </p>
          <p className="mb-2">
            <span className="font-bold inline-block mb-2">説明</span>
            <br />
            <Skeleton height={100} />
          </p>
        </div>
        <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl sm:w-2/5 sm:text-base sm:h-[350px] lg:h-[400px] lg:text-2xl">
          <h2 className="font-bold text-center mb-16 sm:mb-5">種族値</h2>
          <Skeleton height={200} />
        </div>
      </div>
      <div className="w-11/12 border-4 border-gray-400 rounded-lg mx-auto p-5 mb-10">
        <p className="text-center font-bold text-3xl mb-10">進化</p>
        <div>
          <Skeleton height={200}/>
        </div>
      </div>
    </section>
  );
};

export default SkeletonDetail;
