"use strict";
import CoachGridTile from "./CoachGridTile";

const CoachGridList = ({ coaches }) => {
  let tiles = [];
  for (let key in coaches) {
    if (coaches.hasOwnProperty(key)) {
      tiles.push(
        <CoachGridTile key={key} coach={coaches[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {tiles}
    </div>
  );
};

export default CoachGridList
