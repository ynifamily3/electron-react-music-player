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
  },
  titleArea: {
    position: "relative",
    margin: "26px 0 0 20px"
  },
  title: {
    fontSize: "15px",
    lineHeight: "19px",
    fontWeight: "700",
    color: "#fff"
  },
  controlArea: {
    position: "absolute",
    top: "-7px",
    right: "13px"
  },
  btnShuffle: {
    display: "inline-block",
    padding: "7px",
    verticalAlign: "top",
    textAlign: "center",
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content: '""',
      backgroundPosition: "-532px -580px",
      width: "22px",
      height: "22px",
      backgroundImage: "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px"
    },
    "&.on": {
      "&:after": {
        backgroundPosition: "-442px -580px",
        width: "22px",
        height: "22px"
      }
    }

  },
  btnRepeat: {
    display: "inline-block",
    padding: "7px",
    verticalAlign: "top",
    textAlign: "center",
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content: '""',
      backgroundPosition: "-771px -707px",
      width: "22px",
      height: "22px",
      backgroundImage: "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px"
    },
    "&.once": {
      "&:after": {
        backgroundPosition: "-622px -580px",
        width: "22px",
        height: "22px"
      }
    },
    "&.all": {
      "&:after": {
        backgroundPosition: "-771px -587px",
        width: "22px",
        height: "22px"
      }
    }
  },
  listWrap: {
    position: "absolute",
    top: "62px",
    right: "0",
    bottom: "0",
    left: "0",
    overflowX: "hidden"
  },
  normalArea: {
    overflowX: "hidden",
    overflowY: "auto",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0"
  }
});
// 반복재생 : all once, ""
const PlaylistSection = props => {
  const classes = useStyles();
  return (
    <div className={classes.playlistSection}>
      <div className={classes.titleArea}>
        <h2 className={classes.title}>이어지는 노래</h2>
        <div className={classes.controlArea}>
          <a title="재생 방법 변경" className={clsx(classes.btnShuffle, "on")}></a>
          <a title="반복 재생 설정" className={clsx(classes.btnRepeat, "once")}></a>
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
