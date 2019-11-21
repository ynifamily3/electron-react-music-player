import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const Search = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-search", activated && "activated")}>
      DJ 페이지
    </div>
  );
};

export default Search;
