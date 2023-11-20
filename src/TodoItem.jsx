export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label class="container">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
        <span class="checkmark"></span>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Obliviate
      </button>
      {/* <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete Task
      </button> */}
    </li>
  )
}
