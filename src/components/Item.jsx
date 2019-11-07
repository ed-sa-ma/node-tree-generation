import React, { useState } from "react";

import List from "./List";

const Item = ({ item, backgroundDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded"
      onClick={e => {e.stopPropagation(); setIsOpen(currentState => !currentState); }}
    >
      <li
        className={`
          rounded
          ${item.children && "hover:bg-teal-300 cursor-pointer"}
        `}
      >
        { item.children && (isOpen ? "- " : "+ " ) }
        { item.name }
      </li>
      { item.children && (
        <div style={{ display: isOpen ? "inherit" : "none" }}>
          <List backgroundDark={!backgroundDark} list={item.children} />
        </div>
      )}
    </div>
  );
};

export default Item;
