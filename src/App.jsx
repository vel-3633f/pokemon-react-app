import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card";
import Header from "./components/header";
import Slider from "./components/Slider";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    let res = await getAllPokemon(initialURL);
    loadPokemon(res.results);
    setLoading(false);
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
    <div className="flex flex-col w-screen min-h-screen justify-center items-center">
      <Header />
      <h1 className="self-center text-3xl font-semibold whitespace-nowrap my-10">ピックアップ</h1>
      <Slider/>
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
        {loading ? (
          <h1>ローディング...</h1>
        ) : (
          pokemonData.map((pokemon, index) => {
            return <Card key={index} pokemon={pokemon} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
