import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../public/img/logoImg.png";
import { useNavigate } from "react-router-dom";

const Card = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({
    id: pokemon.id,
    name: "なし",
    img: logo,
    url: pokemon.species.url,
  });

  const navigate = useNavigate();
  useEffect(() => {
    const getJaPokemon = async (url) => {
      try {
        const res = await axios.get(url);
        const names = res.data.names;
        const name = names.find((v) => v.language.name === "ja");

        const newPokemonObj = {
          id: pokemon.id,
          name: name.name,
          img: pokemon.sprites.other["official-artwork"].front_default,
          url: pokemon.species.url,
        };
        setPokemonData(newPokemonObj);
      } catch (e) {
        console.log(e, "エラー！！");
      }
    };
    getJaPokemon(pokemonData.url);
  }, []);

  return (
    <div
      className="transition ease-in-out [&_div]:hover:-translate-y-2 [&_div]:hover:scale-105 cursor-pointer"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div className="w-[75px] bg-base-100 shadow rounded border border-gray-300 sm:w-[120px] md:w-[170px] ">
        <img src={pokemonData.img} alt={pokemonData.name} className="w-full" />
      </div>
      <h2 className="text-xs text-center">{pokemonData.name}</h2>
    </div>
  );
};

export default Card;
