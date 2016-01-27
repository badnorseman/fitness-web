"use strict";

const CoachGridTile = ({ coach, goTo }) => {
  const { avatar, name } = coach;
  const styles = {
    avatar: {
      maxHeight: "160px"
    }
  };

  return (
    <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
      <div className="mdl-card__media">
        <a href="#!"
          onClick={ev => {
            ev.preventDefault();
            goTo("SHOWCOACH", coach);
          }}
        >
          <img src={avatar} alt="" style={styles.avatar} />
        </a>
      </div>
      <div className="mdl-card__supporting-text">
        <p className="mdl-typography--title">{name}</p>
        <p className="mdl-typography--subhead">{name}</p>
      </div>
    </div>
  );
};

export default CoachGridTile
