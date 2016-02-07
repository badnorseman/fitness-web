"use strict";
import CoachGridlistItem from "./CoachGridlistItem";

const CoachGridlist = ({ coaches }) => {
  let items = [];
  for (let key in coaches) {
    if (coaches.hasOwnProperty(key)) {
      items.push(
        <CoachGridlistItem key={key} coach={coaches[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {items}
    </div>
  );
};

export default CoachGridlist
