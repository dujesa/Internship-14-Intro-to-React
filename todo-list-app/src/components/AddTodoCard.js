import { useState } from "react";

import "./AddTodoCard.css";
import AddTodoForm from "./AddTodoForm";
import { priorityType } from "./../enums/constants";

const AddTodoCard = ({ addTodo }) => {
  const [todoForm, setTodoFormState] = useState({
    name: "",
    description: "",
    priority: priorityType.LOW,
    isDone: false,
  });

  const [formError, setFormError] = useState("");

  const submitTodoFormHandler = (event) => {
    event.preventDefault();

    if (!todoForm.name) {
      setFormError("Invalid Todo name.");

      return;
    }

    if (!todoForm.description) {
      setFormError("Invalid Todo description.");

      return;
    }

    addTodo(todoForm);

    setTodoFormState({
      name: "",
      description: "",
      priority: priorityType.LOW,
      isDone: false,
    });
  };

  return (
    <div className="App-card AddTodoCard">
      <h2 className="App-card-header AddTodoCard-header">Add ToDo</h2>
      {formError && <span className="App-card-error">Error: {formError}</span>}
      <AddTodoForm
        todo={todoForm}
        setTodoFormState={setTodoFormState}
        submitTodoFormHandler={submitTodoFormHandler}
      />
    </div>
  );
};

export default AddTodoCard;
