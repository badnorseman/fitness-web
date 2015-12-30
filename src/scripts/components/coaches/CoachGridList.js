"use strict";
import CoachGridTile from "./CoachGridTile";

const CoachGridList = ({
  coaches,
  onShow
}) => {
  let tiles = (coaches) => {
    let tiles = [];
    for (let key in coaches) {
      if (coaches.hasOwnProperty(key)) {
        tiles.push(
          <CoachGridTile key={key} coach={coaches[key]} onShow={onShow} />
        );
      }
    }
    return tiles;
  }(coaches);

  const gridStyle = {
    padding: "0"
  };

  return (
    <div className="mdl-grid" style={gridStyle}>
      {tiles}
    </div>
  );
};

export default CoachGridList
