import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

import CoverSection from './CoverSection/CoverSection';
import PlaylistSection from './PlaylistSection/PlaylistSection';

const useStyles = createUseStyles({
  LyPlaylist: {
    "&:after": {
      display: "block",
      content: '""',
      clear: "both"
    },
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "81px",
    left: "0",
    zIndex: "70",
    transform: "translate3d(0,100%,0)",
    transition: "visibility .3s,transform .3s cubic-bezier(.4,0,.2,1),-webkit-transform .3s cubic-bezier(.4,0,.2,1);",
    visibility: "hidden",
    "&.show": {
      visibility: "visible",
      transform: "translateZ(0)"
    }
  },
  dimmed: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(20,20,20,.97);"
  }
});

const LyPlaylist = props => {
  const { show } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.LyPlaylist, show && "show")}>
      <div className={classes.dimmed}></div>
      <CoverSection />
      <PlaylistSection />
    </div>
  );
};

export default LyPlaylist;
