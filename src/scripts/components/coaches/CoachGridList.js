"use strict";
import CoachGridTile from "./CoachGridTile";

const CoachGridList = ({ coaches, goTo }) => {
  let tiles = [];
  for (let key in coaches) {
    if (coaches.hasOwnProperty(key)) {
      tiles.push(
        <CoachGridTile key={key} coach={coaches[key]} goTo={goTo} />
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
