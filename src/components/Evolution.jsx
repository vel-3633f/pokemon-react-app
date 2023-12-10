// import { useEffect, useState } from "react";
// import axios from "axios";

// const Evolution = ({ url }) => {
//   const [pokemonEvol, setPokemonEvol] = useState([]);
//   console.log(url);

//   useEffect(() => {
//     url !== "" && getEvolData(url);
//   },[url]);

//   const getEvolData = async (url) => {
//     try {
//       const res = await axios.get(url);
//       console.log(res.data)
//     } catch (e) {
//       console.log(e, "エラー！！");
//     }
//   };
//   return <div>Evolution</div>;
// };

// export default Evolution;
