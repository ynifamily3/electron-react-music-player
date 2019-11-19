import React from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  VolumeArea: {
    position: "absolute",
    top: "24px",
    right: "110px",
    "&:after": { // MusicPlayer 산하에 있는 거지만 여기서만 적용되는거라 생략함.
      display: "block",
      content: '""',
      clear: "both"
    }
  },
  btnVolume: {
    float: "left",
    padding: "10px 2px 10px 14px",
    marginRight: "2px",
    "&:after": {
      display: "inline-block",
      verticalAlign: "top",
      content: '""',
      backgroundImage: "linear-gradient(transparent,transparent),url(/sp_vibe.svg)",
      backgroundSize: "829px 812px",
      backgroundPosition: "-805px -768px",
      width: "17px",
      height: "13px"
    }
  },
  barVolume: {
    float: "left",
    width: "100px",
    height: "37px",
    cursor: "pointer"
  },
  barStatus: {
    position: "relative",
    height: "3px",
    marginTop: "15px",
    borderRadius: "1.5px",
    backgroundColor: "#4b4b4b"
  },
  barNow: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    borderRadius: "1.5px",
    backgroundColor: "#787878"
  }
});

const VolumeArea = props => {
  const classes = useStyles();
  return <div className={classes.VolumeArea}>
    <a href="#" className={classes.btnVolume}></a>
    <div className={classes.barVolume}>
      <div className={classes.barStatus}>
        <div className={classes.barNow} style={{
          width: "50%" // will be removed
        }}>
          <span className={classes.handle}></span>
        </div>
      </div>
    </div>
  </div>
};

export default VolumeArea;
