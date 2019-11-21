import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const Dj = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-dj", activated && "activated")}>
      DJ 페이지
    </div>
  );
};

export default Dj;
