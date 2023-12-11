const Type = ({ type }) => {
  const typeCheck = {
    くさ: "grass",
    どく: "poison",
    ほのお: "fire",
    みず: "water",
    ドラゴン: "dragon",
    でんき: "electricity",
    エスパー: "esper",
    あく: "evil",
    フェアリー: "fairy",
    かくとう: "fighter",
    ひこう: "fly",
    ゴースト: "ghost",
    じめん: "ground",
    こおり: "ice",
    むし: "insect",
    ノーマル: "normal",
    いわ: "rock",
    はがね: "steel",
  };

  const nowType = typeCheck[type];
  return (
    <div className="mr-3">
      <img
        src={`/img/18type_icon/${nowType}.png`}
        alt={type}
        className="w-12 rounded"
      />
      <p className="text-xs text-center">{type}</p>
    </div>
  );
};

export default Type;
