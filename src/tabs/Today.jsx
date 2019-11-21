import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const Today = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-today", activated && "activated")}>
      투데이 페이지 (홈)
    </div>
  );
};

export default Today;
