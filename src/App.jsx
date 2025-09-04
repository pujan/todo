import "./App.css";
import React from "react";
import ItemList from "./components/item-list";

function App() {
  const title = "ToDo";

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline mb-3">
          <img className="logo" src="/todo.svg" alt="logo" />
          {title}
        </h1>

        <div className="todo-list">
          <ItemList />
        </div>
      </div>
    </>
  );
}

export default App;
