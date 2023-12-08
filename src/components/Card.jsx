const Card = ({ pokemon }) => {
  console.log(pokemon);
  const pokemonImg = pokemon.sprites.front_default;
  return (
    <div className="card w-80 bg-base-100 shadow-xl rounded border border-gray-300 flex flex-col items-center ">
      <figure>
        <img src={pokemonImg} alt={pokemon.name} className="w-64" />
      </figure>
      <div className="text-center">
        <h2 className="">{pokemon.name}</h2>
        <p>タイプ</p>
        {/* {pokemon.types.map((type,index) => {
          return <p key={index}>{type}</p>;
        })} */}
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Card;
