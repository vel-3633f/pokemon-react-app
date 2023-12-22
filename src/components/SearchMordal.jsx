import searchLogo from "../../public/img/searchLogo.svg";
import ballLogo from "../../public/img/ballLogo.svg";
import { useRef, useState } from "react";
import { getPokeNum } from "../utils/getPokeNum";
import { useNavigate } from "react-router-dom";

const SearchMordal = ({ handleCloseClick }) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clickSearch = async () => {
    setErrorMsg("");
    setIsLoading(true);
    const pokeNum = await getPokeNum(inputRef.current.value);
    console.log(pokeNum);
    if (pokeNum === "エラー") {
      setErrorMsg("その名前のポケモンは存在しません");
    } else {
      navigate(`/detail/${pokeNum}`);
      setErrorMsg("");
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-60 w-screen h-screen z-10 flex justify-center items-center">
      <div className="bg-white w-[700px] h-[700px] rounded-3xl flex flex-col items-center">
        <div className="flex justify-between items-center w-full h-20 bg-gray-200 rounded-t-3xl px-5">
          <div className="flex items-center">
            <img src={searchLogo} alt="searchLogo" className="w-10" />
            <h1 className="font-bold text-2xl ml-3">タイプや条件で探す</h1>
          </div>
          <button type="button" onClick={handleCloseClick}>
            <span className="batsu"></span>
          </button>
        </div>
        <div className="w-full px-10 pt-10">
          <div className="flex items-center mb-5">
            <img src={ballLogo} alt="searchLogo" className="w-7 mr-3" />
            <h2>フリーワード（英語名での検索のみ）</h2>
          </div>
          <input
            type="text"
            placeholder="名前を英語で入力してください"
            className="w-full h-10 border-2 border-gray-200 rounded px-5"
            ref={inputRef}
          />
        </div>
        <div className="pt-8 h-24">
          {isLoading ? (
            <div className="flex justify-cente mt-3" aria-label="読み込み中">
              <div className="animate-ping h-2 w-2 bg-red-600 rounded-full"></div>
              <div className="animate-ping h-2 w-2 bg-red-600 rounded-full mx-4"></div>
              <div className="animate-ping h-2 w-2 bg-red-600 rounded-full"></div>
            </div>
          ) : (
            <button
              onClick={clickSearch}
              className="bg-red-500 hover:bg-red-400 text-white rounded-full px-10 py-2"
            >
              検索する
            </button>
          )}
        </div>
        <p className="text-red-600 text-default">{errorMsg}</p>
      </div>
    </div>
  );
};

export default SearchMordal;
