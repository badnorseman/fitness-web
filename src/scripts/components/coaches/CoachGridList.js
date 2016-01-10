"use strict";
import CoachGridTile from "./CoachGridTile";

const CoachGridList = ({
  coaches,
  goTo
}) => {
  let tiles = [];
  for (let key in coaches) {
    if (coaches.hasOwnProperty(key)) {
      tiles.push(
        <CoachGridTile key={key} coach={coaches[key]} goTo={goTo} />
      );
    }
  }

  const styles = {
    grid: {
      padding: "0"
    }
  };

  return (
    <div className="mdl-grid" style={styles.grid}>
      {tiles}
    </div>
  );
};

export default CoachGridList
