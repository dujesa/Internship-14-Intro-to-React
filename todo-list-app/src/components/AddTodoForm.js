import "./AddTodoForm.css";
import priorityType from "../enums/priorityType";

const AddTodoForm = () => {
  const priorities = Object.values(priorityType);
  const priorityOptions = priorities.map((priority) => {
    return <option value={priority} className="AddTodoForm-option">{priority.toLowerCase()}</option>;
  });

  const handlePriority = () => {};

  return (
    <form className="AddTodoForm">
      <input value="Title" className="AddTodoForm-input" />
      <textarea value="Description" className="AddTodoForm-input" />
      <select value={priorities[0]} onChange={handlePriority}>
        {priorityOptions}
      </select>
      <input type="submit" value="Submit" className="AddTodoForm-button" />
    </form>
  );
};

export default AddTodoForm;
