import { useState } from "react";
import "./App.css";

import AddTodoCard from "./components/AddTodoCard";
import TodoTable from "./components/TodoTable";
import priorityType from "./enums/priorityType";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "Zadatak 1",
      priority: priorityType.LOW,
      isDone: false,
    },
    {
      name: "Zadatak 2",
      priority: priorityType.MEDIUM,
      isDone: false,
    },
    {
      name: "Zadatak 3",
      priority: priorityType.HIGH,
      isDone: true,
    },
    {
      name: "Zadatak 4",
      priority: priorityType.LOW,
      isDone: false,
    },
  ]);

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
