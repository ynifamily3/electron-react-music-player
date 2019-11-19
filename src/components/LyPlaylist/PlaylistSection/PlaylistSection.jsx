import React from "react";
import { createUseStyles } from "react-jss";
import ListItems from "./ListItems/ListItems";
import clsx from "clsx";

const useStyles = createUseStyles({
  playlistSection: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    width: "350px",
    backgroundColor: "#141414",
    color: "white" // debug
  }
});

const PlaylistSection = props => {
  const classes = useStyles();
  return (
    <div className={classes.playlistSection}>
      <div className={classes.titleArea}>
        <h2 className={classes.title}>이어지는 노래</h2>
        <div className={classes.controlArea}>
          <a title="재생 방법 변경" classname={classes.btnShuffle}></a>
          <a title="반복 재생 설정" classname={classes.btnRepeat}></a>
        </div>
      </div>
      <div className={classes.listWrap}>
        <div className={classes.listInner}>
          <div className={classes.normalArea}>
            <ListItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;
