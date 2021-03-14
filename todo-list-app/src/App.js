import { useState } from "react";

import "./App.css";

import { seedTodos } from "./defaults/seed";
import AddTodoCard from "./components/AddTodoCard";
import TodoTable from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState(seedTodos);

  const addTodo = (newTodo) => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  return (
    <div className="App">
      <AddTodoCard addTodo={addTodo} />
      <TodoTable todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
