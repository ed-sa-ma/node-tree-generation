import React from "react";

import Item from "./Item";

const List = ({ list, backgroundDark }) => (
  <ul
    className={`
      ${backgroundDark ? "bg-gray-400" : "bg-gray-200"}
      p-4
      rounded-lg
      text-center
    `}
  >
    { list.map(i => <Item key={i.id} backgroundDark={backgroundDark} item={i} />) }
  </ul>
);

export default List;
