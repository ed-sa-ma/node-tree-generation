import React from 'react';

import List from "./components/List";
import DataFormatter from "./components/DataFormatter";
import useListOfNodes from "./hooks/useListOfNodes";

function App() {
  const list = useListOfNodes(500);

  return (
    <div className="App font-mono">
      <h1>Node tree generation</h1>
      <DataFormatter data={list}>
        {formattedData => (
          <List backgroundDark={false} list={formattedData} />
        )}
      </DataFormatter>
    </div>
  );
}

export default App;
