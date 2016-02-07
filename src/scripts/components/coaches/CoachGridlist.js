"use strict";
import CoachTile from "./CoachTile";

const CoachGridlist = ({ coaches }) => {
  let tiles = [];
  for (let key in coaches) {
    if (coaches.hasOwnProperty(key)) {
      tiles.push(
        <CoachTile key={key} coach={coaches[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {tiles}
    </div>
  );
};

export default CoachGridlist
