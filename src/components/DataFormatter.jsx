import { useMemo } from "react";

const DataFormatter = ({ children, data }) => {
  const formattedList = useMemo(() => {
    const firstAncestors = data.filter(i => !i.parent);
  
    // Function to populate the children property of an item. It will be called recursively.
    const writeChildrenOfItem = (item, list) => {
      const children = [];
  
      for (let possibleChild of list) {
        if (possibleChild.parent === item.id) {
          // We extract the "parent" property in the new format.
          const { parent, ...child } = possibleChild;
          // We populate the children property of the item before saving it.
          const childWithChildren = writeChildrenOfItem(child, list);
  
          children.push(childWithChildren);
        }
      }
  
      return { ...item, ...(children.length > 0 && { children }) };
    };
  
    return firstAncestors.map(i => writeChildrenOfItem(i, data));
    }, [data]);

  return (
    children(formattedList)
  );
};

export default DataFormatter;
