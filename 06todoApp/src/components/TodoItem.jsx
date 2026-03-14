// TodoItem — a reusable component that receives data through props.
// Props: todo (object), onToggle (function), onDelete (function)
// Callback props (onToggle, onDelete) let the child communicate back to the parent.

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm group">
      {/* Checkbox toggles the completed state */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 accent-indigo-600 cursor-pointer"
      />

      {/* Todo text — strike-through when completed */}
      <span
        className={`flex-1 text-gray-800 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>

      {/* Delete button — visible on hover */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 text-lg leading-none"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  )
}

export default TodoItem
