import React from 'react';
import { createUseStyles } from "react-jss";
import clsx from 'clsx';

const useStyles = createUseStyles({
  "@keyframes loadingAnimation": {
    to: {
      backgroundPositionX: "-3480px"
    }
  },
  completed: {
    display: "none" // 로딩이 완료된 경우 가림
  },
  loading: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    "zIndex": 300,
    "textAlign": "center",
    backgroundColor: "#fbfbfb",
    "&:before, &:after": {
      display: "inline-block",
      verticalAlign: "middle",
      content:'""'
    },
    "&:before": {
      width: "0",
      height: "100%"
    },
    "&:after": {
      width: "58px",
      height: "58px",
      background: "url(/playing_loading.png)",
      backgroundSize: "3480px 58px",
      animation: "$loadingAnimation 1.5s steps(60) infinite",
    }
  }
});

const Loading = props => {
  const { isLoadingCompleted } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.loading, isLoadingCompleted && classes.completed)} />
  )
};

export default Loading;