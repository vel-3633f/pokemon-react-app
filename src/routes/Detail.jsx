import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../public/img/logoImg.png";
import Header from "../components/Header";

import { useParams } from "react-router-dom";



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
  console.log(params);
  let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}/`;
  const [pokemonDetail, setPokemonDetail] = useState({
    id: 0,
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
      let flavorText = flavorTextEntries.filter(function (v) {
        return v.language.name == "ja";
      });

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
      setPokemonDetail(detailObj);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  return (
    <>
      <Header />
      <section>
        {loading ? (
          <h1>ローディング...</h1>
        ) : (
          <div>
            <div className="w-screen bg-gray-100 flex flex-col items-center justify-center">
              <img
                src={pokemonDetail.img}
                alt={pokemonDetail.name}
                className="h-64 my-5"
              />
              <div className="w-11/12 bg-white rounded border-4 border-gray-400 shadow-2xl px-5 py-5 mb-5">
                <p className="font-bold text-lg mb-1 text-center">{`No. ${pokemonDetail.id}`}</p>
                <p className="font-bold text-2xl text-center">{pokemonDetail.name}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl mb-5">
                <p className="mb-2">
                  <span className="font-bold">分類：</span>
                  {pokemonDetail.genus}
                </p>
                <p className="mb-2">
                  <span className="font-bold">タイプ：</span>
                  {pokemonDetail.types.map((type, index) => (
                    <span key={index}>{` ${type}`}</span>
                  ))}
                </p>
                <p className="mb-2">
                  <span className="font-bold">高さ：</span>
                  {pokemonDetail.height}
                  <span>m</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold">重さ：</span>
                  {pokemonDetail.weight / 10}
                  <span>kg</span>
                </p>
                <p className="mb-2">
                  <span className="font-bold inline-block mb-2">説明</span>
                  <br />
                  <span>{pokemonDetail.flavorText}</span>
                </p>
              </div>
              <div className="w-11/12 bg-white rounded p-8 border-gray-300 border-4 text-xl">
                <h2 className="font-bold text-center mb-16">種族値</h2>
                {pokemonDetail.status.map((obj, index) => {
                  return (
                    <p key={index} className="text-center mr-10 mb-5">
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
    </>
  );
};

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }


export default Detail;
