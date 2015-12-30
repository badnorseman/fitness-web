"use strict";

const CoachGridTile = ({
  coach,
  onShow
}) => {
  const { avatar, name } = coach;

  const cellStyle = {
    margin: "0"
  };

  const cardStyle = {
    height: "auto",
    margin: "0 auto",
    marginBottom: "10px",
    marginRight: "10px",
    maxWidth: "320px",
    width: "320px"
  };

  const avatarStyle = {
    backgroundImage: "url(" + avatar + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "160px",
    WebkitTransition: "all",
    msTransition: "all"
  };

  return (
    <a href="#!"
      onClick={ev => {
        ev.preventDefault();
        onShow(coach);
      }}
    >
      <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop"
        style={cellStyle}
       >
        <div className="mdl-card mdl-shadow--2dp" style={cardStyle}>
          <div className="mdl-card__title" style={avatarStyle}></div>
          <div className="mdl-card__supporting-text">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CoachGridTile
