import { useNavigate } from "react-router-dom";

const Type = ({ type }) => {
  const typeCheck = {
    ノーマル: {
      type: "normal",
      num: 1,
    },
    かくとう: {
      type: "fighter",
      num: 2,
    },
    ひこう: {
      type: "fly",
      num: 3,
    },
    どく: {
      type: "poison",
      num: 4,
    },
    じめん: {
      type: "ground",
      num: 5,
    },
    いわ: {
      type: "rock",
      num: 6,
    },
    むし: {
      type: "insect",
      num: 7,
    },
    ゴースト: {
      type: "ghost",
      num: 8,
    },
    はがね: {
      type: "steel",
      num: 9,
    },
    ほのお: {
      type: "fire",
      num: 10,
    },
    みず: {
      type: "water",
      num: 11,
    },
    くさ: {
      type: "grass",
      num: 12,
    },
    でんき: {
      type: "electricity",
      num: 13,
    },
    エスパー: {
      type: "esper",
      num: 14,
    },
    こおり: {
      type: "ice",
      num: 15,
    },
    ドラゴン: {
      type: "dragon",
      num: 16,
    },
    あく: {
      type: "evil",
      num: 17,
    },
    フェアリー: {
      type: "fairy",
      num: 18,
    },
  };

  const navigate = useNavigate();

  const nowType = typeCheck[type];
  const clickType = () => {
    navigate(`/search/${nowType.num}`);
    window.location.reload();
  };
  return (
    <div
      className="mr-3 flex flex-col items-center cursor-pointer"
      onClick={clickType}
    >
      <img
        src={`/img/18type_icon/${nowType.type}.png`}
        alt={type}
        className="w-12 rounded"
      />
      <p className="text-xs text-center">{type}</p>
    </div>
  );
};

export default Type;
