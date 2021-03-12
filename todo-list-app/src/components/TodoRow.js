import PriorityBadge from "./PriorityBadge";

const TodoRow = (props) => {
  const { name, priority, isDone } = props.todo;
  const handleStatusChange = () => {
    return !isDone;
  };

  return (
    <li>
      <h3>{name}</h3>
      <PriorityBadge priority={priority} />
      <input type="checkbox" checked={isDone} onChange={handleStatusChange} />
    </li>
  );
};

export default TodoRow;
