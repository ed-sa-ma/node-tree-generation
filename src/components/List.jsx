import React from "react";

import Item from "./Item";

const List = ({ list }) => (
  <ul>
    { list.map(i => <Item key={i.id} item={i} />) }
  </ul>
);

export default List;
