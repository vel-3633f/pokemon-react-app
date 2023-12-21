import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import left from "../../public/img/left.png";
import right from "../../public/img/right.png";
import Type from "../components/Type";
import Evolution from "../components/Evolution";
import useGetDetail from "../hooks/useGetDetail";

const statusObj = {
  hp: "HP",
  attack: "攻撃",
  defense: "防御",
  "special-attack": "特攻",
  "special-defense": "特防",
  speed: "素早さ",
};

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const pokemonDetail = useGetDetail(params);

  return (
    <>
      <Header />
      <section>
        <div className="relative">
          {params.pokemonId !== "1" && (
            <div
              onClick={() => {
                const nextId = String(Number(params.pokemonId) - 1);
                navigate(`/detail/${nextId}`);
              }}
              className="absolute top-32 left-4 w-8 cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 lg:w-20 sm:w-12 lg:left-10 sm:top-24"
            >
              <img src={left} alt="button" />
            </div>
          )}
          <div className="w-screen bg-gray-100 flex flex-col items-center justify-center sm:flex-row">
            <img
              src={pokemonDetail.img}
              alt={pokemonDetail.name}
              className="h-64 my-5 sm:h-56 sm:mr-7 lg:h-64"
            />
            <div className="w-11/12 bg-white rounded border-4 border-gray-400 shadow-2xl px-5 py-5 mb-5 sm:w-[300px] sm:border-none sm:py-10 lg:w-[430px] lg:px-16">
              <p className="font-bold text-lg sm:text-base lg:text-2xl mb-1 text-center sm:text-left">{`No. ${pokemonDetail.id}`}</p>
              <p className="font-bold text-2xl sm:text-lg lg:text-3xl text-center sm:text-left">
                {pokemonDetail.name}
              </p>
              <p className="font-bold text-base sm:text-base lg:text-2xl text-gray-500 text-center sm:text-left">
                {pokemonDetail.genus}
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              const nextId = String(Number(params.pokemonId) + 1);
              navigate(`/detail/${nextId}`);
            }}
            className="absolute top-32 right-4 w-8 cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 lg:w-20 sm:w-12 lg:right-10 sm:top-24"
          >
            <img src={right} alt="button" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10 sm:flex-row">
          <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl mb-5 sm:w-2/5 sm:text-base sm:mb-0 sm:mr-5 sm:h-[350px] lg:text-2xl lg:h-[400px]">
            <p className="mb-2">
              <span className="font-bold">分類：</span>
              {pokemonDetail.genus}
            </p>
            <div className="mb-2 flex items-center">
              <span className="font-bold inline-block mb-3">タイプ：</span>
              {pokemonDetail.types.map((type, index) => (
                <Type key={index} type={type} />
              ))}
            </div>
            <p className="mb-2">
              <span className="font-bold">高さ：</span>
              {(pokemonDetail.height / 10).toFixed(1)}
              <span>m</span>
            </p>
            <p className="mb-2">
              <span className="font-bold">重さ：</span>
              {(pokemonDetail.weight / 10).toFixed(1)}
              <span>kg</span>
            </p>
            <p className="mb-2">
              <span className="font-bold inline-block mb-2">説明</span>
              <br />
              <span>{pokemonDetail.flavorText}</span>
            </p>
          </div>
          <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl sm:w-2/5 sm:text-base sm:h-[350px] lg:h-[400px] lg:text-2xl">
            <h2 className="font-bold text-center mb-16 sm:mb-5">種族値</h2>
            {pokemonDetail.status.map((obj, index) => {
              return (
                <p key={index} className="text-center mr-10 mb-5 sm:mb-2">
                  <span className="font-bold w-20 inline-block mr-10">
                    {statusObj[obj.stat.name]}
                  </span>
                  <span>{obj["base_stat"]}</span>
                </p>
              );
            })}
          </div>
        </div>
        <Evolution url={pokemonDetail.evolutionUrl} params={params} />
      </section>
    </>
  );
};

export default Detail;
