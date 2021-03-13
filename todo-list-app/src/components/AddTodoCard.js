import "./AddTodoCard.css";
import AddTodoForm from "./AddTodoForm";

const AddTodoCard = () => {
  return (
    <div className="App-card AddTodoCard">
      <h2 className="App-card-header AddTodoCard-header">Add ToDo</h2>
      <AddTodoForm />
    </div>
  );
};

export default AddTodoCard;
