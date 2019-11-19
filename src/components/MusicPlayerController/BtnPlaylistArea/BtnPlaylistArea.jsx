import React from 'react';
import { createUseStyles } from "react-jss";
import clsx from 'clsx';

const useStyles = createUseStyles({
  BtnPlaylistArea: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    width: "81px",
    textAlign: "center",
    borderLeft: "1px solid hsla(0,0%,84.7%,.15)",
    "&.on": {
      backgroundColor: "#ff1150"
    }
  },
  btnPlaylist: {
    display: 'inline-block',
    width: "100%",
    height: "63px",
    marginTop: "18px",
    verticalAlign: "middle",
    "&.on": {
      "&:after": {
        backgroundPosition: "-771px -227px",
        width: "23px",
        height: "22px",
        marginTop: "11px"
      }
    },
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content:'""',
      backgroundImage: "linear-gradient(transparent, transparent), url(/sp_vibe.svg)",
      backgroundSize: '829px 812px',
      backgroundPosition: '-578px -690px',
      width: '26px',
      height: '26px',
      marginTop: '9px'
    }
  }
});

const BtnPlaylistArea = props => {
  const classes = useStyles();
  return <div className={clsx(classes.BtnPlaylistArea, 'on')}>
    <a href="#" className={clsx(classes.btnPlaylist, 'on')}></a>
  </div>
};

export default BtnPlaylistArea;
