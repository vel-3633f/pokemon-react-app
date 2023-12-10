import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ pokemon }) => {
  const [pokemonName, setPokemonName] = useState([]);

  const pokemonImg = pokemon.sprites.other["official-artwork"].front_default;
  const pokemonURL = pokemon.species.url;

  useEffect(() => {
    getJaPokemon(pokemonURL);
  }, []);

  const getJaPokemon = async (url) => {
    try {
      const res = await axios.get(url);
      const names = res.data.names;
      const name = names.find((v) => v.language.name == "ja");
      setPokemonName(name.name);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  const newPages = (url) => {
    console.log(url);
  };

  return (
    <div
      className="transition ease-in-out [&_div]:hover:-translate-y-2 [&_div]:hover:scale-105"
      onClick={() => newPages(pokemonURL)}
    >
      <div className="w-[75px] bg-base-100 shadow rounded border border-gray-300 sm:w-[120px] md:w-[170px] ">
        <img src={pokemonImg} alt={pokemon.name} className="w-full" />
      </div>
      <h2 className="text-xs text-center">{pokemonName}</h2>
    </div>
  );
};

export default Card;
