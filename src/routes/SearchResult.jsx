import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { getPokemon } from "../utils/pokemon";
import logo from "../../public/img/logoImg.png";
import { useParams } from "react-router-dom";
import Type from "../components/Type";

const types = [
  "ノーマル",
  "かくとう",
  "ひこう",
  "どく",
  "じめん",
  "いわ",
  "むし",
  "ゴースト",
  "はがね",
  "ほのお",
  "みず",
  "くさ",
  "でんき",
  "エスパー",
  "こおり",
  "ドラゴン",
  "あく",
  "フェアリー",
];

const SearchResult = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    let typeURL = `https://pokeapi.co/api/v2/type/${params.type}/`;
    try {
      const res = await axios.get(typeURL);
      setAllData(res.data.pokemon);
      setIsLoading(true);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData([...pokemonData, _pokemonData]);
  };

  //項目を読み込むときのコールバック
  const loadMore = (page) => {
    console.log(page);
    const newData = allData.slice(20 * (page - 1), 20 * page);
    if (newData.length === 0) {
      setHasMore(false);
    } else {
      loadPokemon(newData);
    }
  };

  const loader = (
    <div className="mx-auto w-24 animate-spin" key={0}>
      <img src={logo} alt="logo" />
    </div>
  );

  return (
    <>
      <Header />
      <div className="w-screen min-h-screen bg-slate-100 py-5 flex flex-col items-center">
        <div className="border-4 border-gray-300 px-10 py-5 rounded-xl flex items-center">
          <h1 className="text-xl font-bold mr-5">タイプ：</h1>
          <Type type={types[params.type - 1]} />
        </div>
        {isLoading ? (
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loader={loader}>
            {pokemonData.map((data, index) => (
              <div
                className="grid grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-7 mt-7 mx-auto"
                key={index}
              >
                {data.map((pokemon, index) => {
                  return <Card key={index} pokemon={pokemon} />;
                })}
              </div>
            ))}
          </InfiniteScroll>
        ) : (
          <div className="flex justify-cente mt-3" aria-label="読み込み中">
            <div className="animate-ping h-2 w-2 bg-red-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-red-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-red-600 rounded-full"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
