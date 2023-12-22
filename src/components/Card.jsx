import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import logo from "../../public/img/logoImg.png";

const Card = ({ pokemon }) => {
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    id: pokemon.id,
    name: "",
    img: logo,
    url: pokemon.species.url,
  });

  useEffect(() => {
    const getJaPokemon = async (url) => {
      try {
        const res = await axios.get(url);
        const names = res.data.names;
        const name = names.find((v) => v.language.name === "ja");
        let imgPokemon =
          pokemon.sprites.other["official-artwork"].front_default;
        if (!imgPokemon) imgPokemon = logo;
        const newPokemonObj = {
          id: pokemon.id,
          name: name.name,
          img: imgPokemon,
          url: pokemon.species.url,
        };
        setPokemonData(newPokemonObj);
        setLoading(true);
      } catch (e) {
        console.log(e, "エラー！！");
      }
    };
    getJaPokemon(pokemonData.url);
  }, [pokemonData.url]); // useEffectの依存リストを修正

  //新しいタブで開く
  const openInNewTab = () => {
    const url = `/detail/${pokemon.id}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {loading ? (
        <div
          className="transition ease-in-out [&_div]:hover:-translate-y-2 [&_div]:hover:scale-105 cursor-pointer"
          onClick={openInNewTab}
        >
          <div className="w-[75px] h-[75px] bg-base-100 shadow rounded border border-gray-300 sm:w-[120px] md:w-[170px] sm:h-[120px] md:h-[170px]">
            <img
              src={pokemonData.img}
              alt={pokemonData.name}
              className="w-full"
            />
          </div>
          <h2 className="text-xs text-center">{pokemonData.name}</h2>
        </div>
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
};

export default Card;
