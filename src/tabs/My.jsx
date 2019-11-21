import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const My = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-my", activated && "activated")}>
      마이 페이지
    </div>
  );
};

export default My;
