import "./TodoTable.css";
import TodoRow from "./TodoRow";

const TodoTable = (props) => {
  const todos = props.todos;
  const todoListItems = todos.map((todo) => (
    <TodoRow key={todo.name} todo={todo} />
  ));

  return (
    <div className="App-card TodoTable">
      <h2 className="App-card-header">Todos</h2>
      <ul className="TodoTable-list">{todoListItems}</ul>
    </div>
  );
};

export default TodoTable;
