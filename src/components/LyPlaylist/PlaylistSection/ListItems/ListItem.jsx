import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  listItem: {
    position: "relative",
    overflow: "hidden",
    display: "table",
    width: "100%",
    height: "40px",
    padding: "8px 0",
    tableLayout: "fixed",
    userSelect: "none"
  },
  thumb: {
    display: "table-cell",
    width: "40px",
    height: "40px",
    padding: "0 12px 0 20px",
    overflow: "hidden",
    verticalAlign: "middle"
  },
  img: {
    width: "100%"
  },
  infoArea: {
    display: "table-cell",
    width: "100%",
    overflow: "hidden"
  },
  songArea: {
    display: "table"
  },
  inner: {
    display: "table-cell",
    verticalAlign: "middle"
  },
  song: {
    overflow: "hidden",
    lineClamp: "1",
    boxOrient: "vertical",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordBreak: "break-all",
    display: "-webkit-box",
    height: "22px",
    lineHeight: "22px",
    color: "#dfdfdf"
  },
  artist: {
    overflow: "hidden",
    lineClamp: "1",
    boxOrient: "vertical",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordBreak: "break-all",
    display: "-webkit-box",
    height: "17px",
    fontSize: "13px",
    lineHeight: "17px",
    color: "#737373"
  },
  iconPlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "10",
    width: "40px",
    height: "40px",
    top: "8px",
    left: "20px",
    "&:before": {
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      display: "none", //
      backgroundColor: "rgba(0,0,0,.8)",
      content: '""'
    },
    "&:after": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      content: '""',
      backgroundPosition: "-98px -792px",
      width: "13px",
      height: "16px",
      backgroundImage:
        "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px",
      visibility: "hidden" //
    }
  },
  btnDelete: {
    display: "table-cell",
    width: "40px",
    paddingRight: "8px",
    height: "100%",
    textAlign: "center",
    verticalAlign: "middle",
    opacity: ".3",
    cursor: "pointer",
    "&:focus": {
      opacity: "1"
    },
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content: '""',
      backgroundImage:
        "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px",
      backgroundPosition: "-4px -762px",
      width: "22px",
      height: "22px"
    }
  },
  btnMove: {
    display: "table-cell",
    width: "0",
    height: "100%",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "move",
    "&:focus": {
      width: "44px"
    },
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content: '""',
      backgroundImage:
        "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px",
      backgroundPosition: "-552px -468px",
      width: "21px",
      height: "10px",
      marginTop: "4px"
    }
  }
});

const ListItem = props => {
  const classes = useStyles();
  return (
    <li className={classes.listItem}>
      <div className={classes.thumb}>
        <img
          className={classes.img}
          src={`https://musicmeta-phinf.pstatic.net/album/000/004/4379.jpg?type=r100Fll&v=20190823160604`}
          alt={`Savage Garden 앨범 커버`}
        />
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
      <a href="#" className={classes.btnDelete} draggable="false"></a>
      <a href="#" className={classes.btnMove} draggable="false"></a>
    </li>
  );
};

export default ListItem;
