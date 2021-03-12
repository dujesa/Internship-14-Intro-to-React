import { useState } from "react";
import "./App.css";

import AddTodoCard from "./components/AddTodoCard";
import TodoTable from "./components/TodoTable";

function App() {
  const [state, setState] = useState(0);

  const handleAddItemClick = () => {
    setState((prevState) => prevState + 1);
  };

  const todos = [
    {
      name: "Zadatak 1",
      priority: "low",
      isDone: false,
    },
    {
      name: "Zadatak 2",
      priority: "medium",
      isDone: false,
    },
    {
      name: "Zadatak 3",
      priority: "low",
      isDone: true,
    },
    {
      name: "Zadatak 4",
      priority: "high",
      isDone: false,
    },
  ];

  return (
    <div className="App">
      <AddTodoCard />
      <TodoTable todos={todos} />

      <h1>{state === 0 ? "No items" : `Number of todos: ${state}`}</h1>
      <button onClick={handleAddItemClick}>Add todo</button>
    </div>
  );
}

export default App;
