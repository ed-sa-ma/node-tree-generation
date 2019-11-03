import { useMemo } from "react";

// This hook generates a random list of a given length when the component renders.
const BOT_NAMES = ["Bruce", "Stan", "Mary", "Hugo", "Tom", "Pol", "Sam", "Mark", "Alice"];
const pickRandomInt = (max) => Math.floor(Math.random() * max);

const isValidParentId = (id, item, list) => {
  if (!item.parent) {
    return true;
  } else if (id === item.parent) {
    return false;
  } else {
    const parentIndex = item.parent.match(/uuid(\d+)/)[1];
    const parent = list[parentIndex];
    
    if (!parent) return true;

    return isValidParentId(id, parent, list);
  }
};

const assureParent = (item, list, length) => {
  if (isValidParentId(item.id, item, list)) {
    return [...list, item];
  } else {
    const newItem = { ...item, parent: `uuid${pickRandomInt(length)}` };
    return assureParent(newItem, list, length);
  }
};

const useListOfNodes = (length) => {
  const list = useMemo(() => {
    let result = [];

    for (let i = 0; i < length; i++) {
      const item = {
        name: BOT_NAMES[pickRandomInt(BOT_NAMES.length)],
        id: `uuid${i}`,
        // around one fifth of all the items will be first ancestors.
        ...(pickRandomInt(5) >= 1 && { parent: `uuid${pickRandomInt(length)}` }) 
      };

      result = assureParent(item, result, length);
    }


    return result;
  }, [length]);

  return list;
};

export default useListOfNodes;
