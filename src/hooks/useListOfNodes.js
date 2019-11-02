import { useMemo } from "react";

// This hook generates a random list of a given length when the component renders.
const BOT_NAMES = ["Bruce", "Stan", "Mary", "Hugo", "Tom", "Pol", "Sam", "Mark", "Alice"];
const pickRandomInt = (max) => Math.floor(Math.random()*max);

const useListOfNodes = (length) => {
  const list = useMemo(() => {
    const result = [];

    for (let i = 0; i < length; i++) {
      const item = {
        name: BOT_NAMES[pickRandomInt(BOT_NAMES.length)],
        id: `uuid${i}`,
        // around one fifth of all the items will be first ancestors.
        ...(pickRandomInt(5) >= 1 && { parent: `uuid${pickRandomInt(length)}` }) 
      };

      result.push(item);
    }

    return result;
  }, [length]);

  return list;
};

export default useListOfNodes;
