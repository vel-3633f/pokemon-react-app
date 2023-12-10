const SliderCard = ({ pokemon }) => {
  return (
    <div className="flex justify-center">
      <div className="transition w-[150px]">
        <img src={pokemon.url} alt={pokemon.name} />
      </div>
      <div>
        <p className="text-sm font-bold">{`No. ${pokemon.id}`}</p>
        <p className="text-sm font-bold mb-3">{pokemon.name}</p>
        <p className="text-sm font-bold mb-3">{pokemon.class}</p>
        <div className="flex">
        {pokemon.types.map((type, index) => {
          console.log(type)
          return (
            <div key={index} className="mr-3">
              <img
                src={type.typeImg}
                alt={type.name}
                className="w-7 rounded mx-auto"
              />
              <p className="text-[8px] font-bold text-center">
                {type.name}
              </p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
