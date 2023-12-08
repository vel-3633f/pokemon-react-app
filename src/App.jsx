import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

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
    <div className="flex flex-col w-screen min-h-screen justify-center items-center">
      {loading ? (
        <h1>ローディング...</h1>
      ) : (
        pokemonData.map((pokemon, index) => {
          return <Card key={index} pokemon={pokemon}></Card>;
        })
      )}
    </div>
  );
}

export default App;
