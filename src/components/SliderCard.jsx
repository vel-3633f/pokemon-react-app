

const SliderCard = ({ url,name }) => {

  return (
    <div className="w-screen transition ease-in-out [&_div]:hover:-translate-y-2 [&_div]:hover:scale-105">
      <div className="transition w-96 bg-base-100 shadow rounded border border-gray-300 relative ">
        <img src={url} alt={name} className="w-96" />
      </div>
      <h2 className="text-xl text-canter">{name}</h2>
    </div>
  );
};

export default SliderCard;
