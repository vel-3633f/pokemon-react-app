import { useEffect, useState } from "react";
import axios from "axios";
import EvolCard from "./EvolCard";

const Evolution = ({ url}) => {
  const [evolData, setEvolData] = useState([]);
  const [evolUrls, setEvolUrls] = useState([]);

  useEffect(() => {
    // URLが空でない場合のみデータを取得する
    url !== "" && getEvolUrl(url);
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      // evolUrlsが空でない場合にデータを取得
      if (evolUrls.length > 0) {
        const newData = [];
        for (let evolUrl of evolUrls) {
          const res = await axios.get(evolUrl);
          const pokemonId = res.data.id;
          const res2 = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
          );
          newData.push(res2.data);
        }
        setEvolData(newData);
      }
    };

    fetchData();
  }, [evolUrls]);

  const getEvolUrl = async (url) => {
    try {
      const res = await axios.get(url);
      // 進化情報を格納するための配列を初期化
      const urlAry = [];
      // 最初の進化情報を取得
      const first = res.data.chain.species.url;
      urlAry.push(first);

      // 2段階目の進化情報を取得
      const evolObj = res.data.chain["evolves_to"][0];
      if (evolObj && evolObj.species.url !== "") {
        urlAry.push(evolObj.species.url);

        // 3段階目の進化情報を取得
        const thirdEvol = evolObj["evolves_to"][0];
        if (thirdEvol && thirdEvol.species.url) {
          urlAry.push(thirdEvol.species.url);
        }
      }

      setEvolUrls(urlAry);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  return (
    <div className="w-11/12 border-4 border-gray-400 rounded-lg mx-auto p-5">
      <p className="text-center font-bold text-3xl mb-10">進化</p>
      <div className="flex flex-col">
        {evolData.map((pokemon, index) => {
          return <EvolCard key={index} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Evolution;
