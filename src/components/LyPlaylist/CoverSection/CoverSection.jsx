import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  coverSection: {
    position: "absolute",
    top: "0",
    right: "350px", // 우측 350 px 를 내줌.
    bottom: "0",
    left: "0",
    textAlign: "center",
    "&:after": {
      display: "inline-block",
      width: "0",
      height: "100%",
      marginLeft: "-4px",
      verticalAlign: "middle",
      content: '""'
    }
  },
  thumbCover: {
    display: "inline-block",
    width: "514px",
    height: "514px",
    verticalAlign: "middle",
    "& img": {
      border: "0",
      maxWidth: "100%",
      height: "100%",
      width: "100%"
    },
  },
});

const CoverSection = props => {
  const classes = useStyles();
  return (
    <div className={classes.coverSection}>
      <span className={classes.thumbCover}>
        <img src={'https://musicmeta-phinf.pstatic.net/album/000/642/642016.jpg?type=r720Fll&v=20191105153702'} alt={'노래제목'} />
      </span>
    </div>
  );
};

export default CoverSection;
