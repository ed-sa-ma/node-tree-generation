import { useMemo } from "react";

function generateNodeTree(array, parentId = undefined) {
  return array.filter(i => i.parent === parentId)
    .map(({ name, id }) => {
      let childrenTree = generateNodeTree(array, id);

      return ({
        name,
        id,
        ...(childrenTree.length > 0 ? { children: childrenTree } : null)
      });
    });
};

const DataFormatter = ({ children, data }) => {
  const formattedList = useMemo(() => generateNodeTree(data), [data]);

  var alternativeResult = generateNodeTree(data);
  console.log(alternativeResult);

  return (
    children(formattedList)
  );
};

export default DataFormatter;
