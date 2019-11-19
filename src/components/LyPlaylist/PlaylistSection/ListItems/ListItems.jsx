import React from "react";
import ListItem from "./ListItem";

// ListItem들의 배열을 표현해주면 됨.

const ListItems = props => {
  return (
    <ul>
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default ListItems;
