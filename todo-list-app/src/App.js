import { useState } from "react";
import "./App.css";

import AddTodoCard from "./components/AddTodoCard";
import TodoTable from "./components/TodoTable";
import priorityType from "./enums/priorityType";

function App() {
  const [state, setState] = useState(0);

  const handleAddItemClick = () => {
    setState((prevState) => prevState + 1);
  };

  const todos = [
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
  ];

  return (
    <div className="App">
      <AddTodoCard />
      <TodoTable todos={todos} />
    </div>
  );
  /*
  <h1>{state === 0 ? "No items" : `Number of todos: ${state}`}</h1>
      <button onClick={handleAddItemClick}>Add todo</button>
    
  */
}

export default App;
