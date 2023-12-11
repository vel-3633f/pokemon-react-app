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

        for (const type of pokemon.types) {
          const typeUrl = type.type.url;
          const resType = await axios.get(typeUrl);
          const typeJa = resType.data.names.find(
            (v) => v.language.name == "ja"
          ).name;
          typeAry.push(typeJa);
        }
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
    getJaPokemon(pokemonData.url);
  }, [pokemon.id, pokemon.species.url]);

  return (
    <div
      className="transition ease-in-out cursor-pointer flex mb-10"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div className="w-[150px] bg-base-100 shadow rounded border border-gray-300 sm:w-[120px] md:w-[170px] ">
        <img src={pokemonData.img} alt={pokemonData.name} className="w-full" />
      </div>
      <div className="flex flex-col justify-center mx-auto">
        <p>{`No. ${pokemon.id}`}</p>
        <h2 className="text-lg font-bold mb-5">{pokemonData.name}</h2>
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
