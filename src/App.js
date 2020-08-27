import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>React Todo</h1>
      <Todo />
    </div>
  );
}

export default App;
