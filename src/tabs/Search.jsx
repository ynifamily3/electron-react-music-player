import React from "react";
import clsx from "clsx";

import "./TabsCommon.scss";

const Search = props => {
  const { activated } = props;
  return (
    <div className={clsx("tab", "tab-search", activated && "activated")}>
      검색 페이지
    </div>
  );
};

export default Search;
