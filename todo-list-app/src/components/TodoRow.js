import "./TodoRow.css";
import PriorityBadge from "./PriorityBadge";

const TodoRow = ({ todo, index, setTodos }) => {
  const { name, priority, isDone } = todo;

  const handleFinishTodo = (index) => {
    setTodos((previousTodos) => {
      const newTodos = [...previousTodos];
      const updatedTodo = { ...newTodos[index] };

      updatedTodo.isDone = !updatedTodo.isDone;
      newTodos[index] = updatedTodo;

      return newTodos;
    });
  };

  return (
    <li className="TodoRow">
      <h3 className={!isDone ? "TodoRow-heaider" : "TodoRow-header--striked"}>
        {name}
      </h3>
      <div className="TodoRow-wrapper">
        <PriorityBadge priority={priority} />
        <input
          type="checkbox"
          name="status"
          checked={isDone}
          onChange={() => handleFinishTodo(index)}
          className="TodoRow-wrapper-checkbox"
        />
      </div>
    </li>
  );
};

export default TodoRow;
