import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../public/img/logo.png";

const statusObj = {
  hp: "HP",
  attack: "攻撃",
  defense: "防御",
  "special-attack": "特攻",
  "special-defense": "特防",
  speed: "素早さ",
};

const Detail = () => {
  let pokemonURL = "https://pokeapi.co/api/v2/pokemon/3/";
  const [pokemonDetail, setPokemonDetail] = useState({
    name: "なし",
    img: logo,
    genus: "",
    height: "",
    weight: "",
    types: ["なし"],
    status: [],
    evolutionUrl: "",
    flavorText: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetail(pokemonURL);
    setLoading(false);
  }, []);

  const getDetail = async (url) => {
    try {
      const res = await axios.get(url);
      const resJa = await axios.get(res.data.species.url);

      const typeAry = [];

      for (const type of res.data.types) {
        const typeUrl = type.type.url;
        const resType = await axios.get(typeUrl);
        const typeJa = resType.data.names.find(
          (v) => v.language.name == "ja"
        ).name;
        typeAry.push(typeJa);
      }

      //ポケモンの名前
      const names = resJa.data.names;
      const flavorTextEntries = resJa.data.flavor_text_entries;
      let flavorText = flavorTextEntries.filter(
        (v) => v.language.name == "ja" && v.version.name == "sword"
      );
      flavorText = flavorText[0].flavor_text;
      if (!flavorText) flavorText = "説明がありません";

      const detailObj = {
        id: res.data.order,
        name: names.find((v) => v.language.name == "ja").name,
        img: res.data.sprites.other["official-artwork"].front_default,
        genus: resJa.data.genera.find((v) => v.language.name == "ja").genus,
        height: res.data.height,
        weight: res.data.weight,
        types: typeAry,
        status: res.data.stats,
        evolutionUrl: resJa.data["evolution_chain"].url,
        flavorText: flavorText,
      };
      // console.log(detailObj);
      setPokemonDetail(detailObj);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  return (
    <section>
      {loading ? (
        <h1>ローディング...</h1>
      ) : (
        <div>
          <div className="w-screen h-80 bg-gray-100 flex items-center justify-center">
            <img
              src={pokemonDetail.img}
              alt={pokemonDetail.name}
              className="h-80 ml-24 mr-10"
            />
            <div className="w-[400px] bg-white rounded border border-gray-400 border-2 shadow-2xl px-5 py-10">
              <p className="font-bold text-2xl mb-3">{`No. ${pokemonDetail.id}`}</p>
              <p className="font-bold text-3xl">{pokemonDetail.name}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center py-10">
            <div className="w-[500px] h-[500px] bg-white rounded border border-gray-400 border-4 shadow-xl p-10 text-xl mr-10">
              <p className="mb-10">
                <span className="font-bold">分類：</span>
                {pokemonDetail.genus}
              </p>
              <p className="mb-10">
                <span className="font-bold">タイプ：</span>
                {pokemonDetail.types.map((type, index) => (
                  <span key={index}>{` ${type}`}</span>
                ))}
              </p>
              <p className="mb-10">
                <span className="font-bold">高さ：</span>
                {pokemonDetail.height}
                <span>m</span>
              </p>
              <p className="mb-10">
                <span className="font-bold">重さ：</span>
                {pokemonDetail.weight / 10}
                <span>kg</span>
              </p>
              <p className="mb-10">
                <span className="font-bold inline-block mb-5">説明</span>
                <br />
                <span>{pokemonDetail.flavorText}</span>
              </p>
            </div>
            <div className="w-[500px] h-[500px] bg-white rounded border border-gray-400 border-4 shadow-2xl p-10">
              <h2 className="text-2xl font-bold text-center mb-16">種族値</h2>
              {pokemonDetail.status.map((obj, index) => {
                return (
                  <p key={index} className="text-center mb-5 text-2xl">
                    <span className="font-bold w-20 inline-block mr-10">
                      {statusObj[obj.stat.name]}
                    </span>
                    <span>{obj["base_stat"]}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
