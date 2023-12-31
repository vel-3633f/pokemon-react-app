import { useNavigate } from "react-router-dom";

const SliderCard = ({ pokemon }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center cursor-pointer" onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <div className="w-[150px]">
        <img src={pokemon.url} alt={pokemon.name} />
      </div>
      <div>
        <p className="text-sm font-bold">{`No. ${pokemon.id}`}</p>
        <p className="text-sm font-bold mb-3">{pokemon.name}</p>
        <p className="text-sm font-bold mb-3">{pokemon.class}</p>
        <div className="flex">
        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="mr-3">
              <img
                src={type.typeImg}
                alt={type.name}
                className="w-7 rounded"
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
