import TodoRow from "./TodoRow";

const TodoTable = (props) => {
  const todos = props.todos;
  const todoListItems = todos.map((todo) => (
    <TodoRow key={todo.toString()} todo={todo} />
  ));

  return (
    <div>
      <h2>Todos</h2>
      <ul>{todoListItems}</ul>
    </div>
  );
};

export default TodoTable;
