import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  PlayTime: {
    position: "absolute",
    right: "258px",
    top: "34px",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "right",
    "& .now": {
      color: "#747474",
      "&:after": {
        display: "inline-block",
        marginLeft: "4px",
        fontWeight: "700",
        color: "#747474",
        content: '"/"' // 작은따옴표로 감싸야됨
      }
    },
    "& .remain": {
      color: "#bcbcbc"
    }
  }
});

const PlayTime = props => {
  const classes = useStyles();
  return (
    <div className={classes.PlayTime}>
      <span className="now">{Math.floor(props.position)}</span>
      <span className="remain">01:00</span>
    </div>
  );
};

export default PlayTime;
