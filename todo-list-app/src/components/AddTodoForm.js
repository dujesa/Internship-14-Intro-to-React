import priorityType from "../enums/priorityType";

const AddTodoForm = () => {
  const priorities = Object.values(priorityType);
  const priorityOptions = priorities.map((priority) => {
    return <option value={priority}>{priority.toLowerCase()}</option>;
  });

  const handlePriority = () => {};

  return (
    <form>
      <input value="Title" />
      <textarea value="Description" />
      <select value={priorities[0]} onChange={handlePriority}>
        {priorityOptions}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTodoForm;
