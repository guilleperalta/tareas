export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    // <li className="list-group-item d-flex justify-content-between">
    <li
      className={`list-group-item d-flex justify-content-between ${
        todo.done ? "bg-success text-white" : "bg-light text-dark"
      }`}
      onClick={() => onToggleTodo(todo.id)}
    >
      <span className="align-self-center"> {todo.description} </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};
