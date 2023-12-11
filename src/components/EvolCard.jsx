import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../public/img/logoImg.png";
import { useNavigate } from "react-router-dom";
import Type from "./Type";

const EvolCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({
    id: pokemon.id,
    name: "なし",
    img: logo,
    url: pokemon.species.url,
    types: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getJaPokemon = async (url) => {
      try {
        const res = await axios.get(url);
        const names = res.data.names;
        const name = names.find((v) => v.language.name === "ja");
        const typeAry = [];

        // 非同期処理が完了するまで待機
        await Promise.all(
          pokemon.types.map(async (type) => {
            const typeUrl = type.type.url;
            const resType = await axios.get(typeUrl);
            const typeJa = resType.data.names.find(
              (v) => v.language.name === "ja"
            ).name;
            typeAry.push(typeJa);
          })
        );

        const newPokemonObj = {
          id: pokemon.id,
          name: name.name,
          img: pokemon.sprites.other["official-artwork"].front_default,
          url: pokemon.species.url,
          types: typeAry,
        };
        setPokemonData(newPokemonObj);
      } catch (e) {
        console.log(e, "エラー！！");
      }
    };

    // useEffect 内でstateの更新を行う場合、依存リストにstateを追加
    getJaPokemon(pokemonData.url);
  }, [pokemon.id, pokemon.species.url, pokemonData.url]);

  return (
    <div
      className="transition ease-in-out cursor-pointer flex mb-10 "
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div className="">
        <img
          src={pokemonData.img}
          alt={pokemonData.name}
          className="w-[150px] bg-base-100 shadow rounded border mr-3 border-gray-300 sm:w-[100px] md:w-[170px] "
        />
      </div>
      <div className="flex flex-col justify-center mx-auto">
        <p className="sm:text-xs lg:text-xl">{`No. ${pokemon.id}`}</p>
        <h2 className="text-lg font-bold mb-5 sm:text-xs lg:text-xl">
          {pokemonData.name}
        </h2>
        <div className="flex">
          {pokemonData.types.map((type, index) => (
            <Type key={index} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvolCard;
