import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../utils/pokemon";
import Card from "./Card";

const ImgList = ({ url }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    let res = await getAllPokemon(url);
    loadPokemon(res.results);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-7 mt-7 mx-auto">
      {pokemonData.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default ImgList;
