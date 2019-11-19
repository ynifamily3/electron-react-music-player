import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  listItem: {

  },
  thumb: {

  }
});

const ListItems = props => {
  const classes = useStyles();
  return (
    <ul>
      <li className={classes.listItem}>
        <div className={classes.thumb}>
          <img src={`https://musicmeta-phinf.pstatic.net/album/000/004/4379.jpg?type=r100Fll&v=20190823160604`} alt={`Savage Garden 앨범 커버`} />
        </div>
        <div className={classes.infoArea}>
          <em className={classes.songArea}>
            <span className={classes.inner}>
              <span className={classes.song}>I want You</span>
            </span>
          </em>
          <span className={classes.artist}>Savage Garden</span>
        </div>
        <a href="#" className={classes.iconPlay}></a>
        <a href="#" className={classes.btnDelete}></a>
        <a href="#" className={classes.btnMove}></a>
        <a href="#" className={classes.btnMove}></a>
      </li>
    </ul>
  );
};

export default ListItems;
