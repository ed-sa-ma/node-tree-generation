import React, { useState } from "react";

import List from "./List";

const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setIsOpen(currentState => !currentState)}
        style={{ cursor: "pointer", listStyle: "none" }}
      >
        { item.children && (isOpen ? "- " : "+ " ) }
        { item.name }
      </li>
      { item.children && (
        <div style={{ display: isOpen ? "inherit" : "none" }}>
          <List list={item.children} />
        </div>
      )}
    </>
  );
};

export default Item;
