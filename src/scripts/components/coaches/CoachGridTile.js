"use strict";

const CoachGridTile = ({
  coach,
  onClick
}) => {
  const { avatar, name } = coach;

  const styles = {
    avatar: {
      backgroundImage: "url(" + avatar + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "160px",
      WebkitTransition: "all",
      msTransition: "all"
    },
    card: {
      height: "auto",
      margin: "0 auto",
      marginBottom: "10px",
      marginRight: "10px",
      maxWidth: "320px",
      width: "320px"
    },
    cell: {
      margin: "0"
    }
  };

  return (
    <a href="#!"
      onClick={ev => {
        ev.preventDefault();
        onClick("SHOWCOACH", coach);
      }}
    >
      <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop"
        style={styles.cell}
       >
        <div className="mdl-card mdl-shadow--2dp" style={styles.card}>
          <div className="mdl-card__title" style={styles.avatar}></div>
          <div className="mdl-card__supporting-text">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CoachGridTile
