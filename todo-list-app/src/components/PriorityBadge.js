import "./PriorityBadge.css";

const PriorityBadge = (props) => {
  const priority = props.priority;

  return <p className="PriorityBadge">{priority}</p>;
};

export default PriorityBadge;
