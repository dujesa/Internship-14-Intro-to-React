import "./AddTodoForm.css";
import priorityType from "../enums/priorityType";

const AddTodoForm = ({ todo, setTodoFormState, submitTodoFormHandler }) => {
  const priorities = Object.values(priorityType);
  const priorityOptions = priorities.map((priority) => {
    return (
      <option value={priority} className="AddTodoForm-option">
        {priority.toLowerCase()}
      </option>
    );
  });

  const handleChange = ({ target: { name, value } }) => {
    setTodoFormState((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <form className="AddTodoForm" onSubmit={submitTodoFormHandler}>
      <input
        value={todo.title}
        name="name"
        placeholder="Title"
        onChange={handleChange}
        className="AddTodoForm-input"
      />
      <textarea
        value={todo.description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="AddTodoForm-input"
      />
      <select value={todo.priority} name="priority" onChange={handleChange}>
        {priorityOptions}
      </select>
      <input type="submit" value="Submit" className="AddTodoForm-button" />
    </form>
  );
};

export default AddTodoForm;
