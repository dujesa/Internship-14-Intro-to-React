import "./TodoRow.css";
import PriorityBadge from "./PriorityBadge";

const TodoRow = (props) => {
  const { name, priority, isDone } = props.todo;
  const handleStatusChange = () => {
    return !isDone;
  };

  return (
    <li className="TodoRow">
      <h3
        className={!isDone ? "TodoRow-heaider" : "TodoRow-header--striked"}
      >
        {name}
      </h3>
      <div className="TodoRow-wrapper">
        <PriorityBadge priority={priority} />
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleStatusChange}
          className="TodoRow-wrapper-checkbox"
        />
      </div>
    </li>
  );
};

export default TodoRow;
