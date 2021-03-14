import { useState } from "react";

import "./TodoTable.css";
import TodoRow from "./TodoRow";

const TodoTable = ({ todos, setTodos }) => {
  const todoListItems = todos.map((todo, index) => (
    <TodoRow key={index} index={index} todo={todo} setTodos={setTodos} />
  ));

  return (
    <div className="App-card TodoTable">
      <h2 className="App-card-header">Todos</h2>
      <ul className="TodoTable-list">{todoListItems}</ul>
    </div>
  );
};

export default TodoTable;
