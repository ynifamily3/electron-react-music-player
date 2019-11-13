import React from "react";

const comp = props => {
  return <div>컴포넌트입니당! - {props.text}<br/>{Math.random()}</div>;
};

export default comp;
