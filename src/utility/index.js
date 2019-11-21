import React, { useCallback } from "react";

const preventCallback = e => {
  console.log("prevent callback invoked");
  // to do
  e.preventDefault();
};

export { preventCallback };
