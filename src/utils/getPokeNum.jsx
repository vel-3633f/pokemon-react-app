import axios from "axios";

export const getPokeNum = async (name) => {
  const lowerName = name.toLowerCase();
  let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${lowerName}/`;
  try {
    const res = await axios.get(pokemonURL);
    // console.log(res.data.id);
    return res.data.id
  } catch (e) {
    console.log(e, "エラー！！");
    return "エラー"
  }
};
