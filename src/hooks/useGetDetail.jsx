import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../public/img/logoImg.png";

const useGetDetail = (params,setIsLoading) => {
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


  useEffect(() => {
    setIsLoading(false)
    getDetail(pokemonURL);
  }, [params]);

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
        id: res.data.id,
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
      setIsLoading(true)
      setPokemonDetail(detailObj);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };


  return pokemonDetail;
};

export default useGetDetail;
