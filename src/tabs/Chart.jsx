import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const Chart = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-chart", activated && "activated")}>
      차트 페이지
    </div>
  );
};

export default Chart;
