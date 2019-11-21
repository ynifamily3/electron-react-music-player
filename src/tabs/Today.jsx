import React from "react";
import clsx from "clsx";

import Digging from "../components/Digging/Digging";

import "./TabsCommon.scss";

const Today = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-today", activated && "activated")}>
      <Digging />
    </div>
  );
};

export default Today;
