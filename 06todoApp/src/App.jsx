import { useState, useEffect } from "react"
import TodoItem from "./components/TodoItem"

// Key React concepts demonstrated in this project:
// 1. List rendering — using .map() with unique key props
// 2. Controlled inputs — form state synced to React state
// 3. CRUD operations — add, toggle complete, delete todos
// 4. useEffect — persisting state to localStorage as a side effect
// 5. Derived state — filtering todos without extra state variables

function App() {
  // Load todos from localStorage on first render (or start with empty array)
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  // Controlled input state for the new-todo text field
  const [inputValue, setInputValue] = useState("")

  // Filter: "all" | "active" | "completed"
  const [filter, setFilter] = useState("all")

  // useEffect — runs whenever todos change and syncs them to localStorage.
  // This is a *side effect* (touching something outside React state).
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Add a new todo to the list
  const addTodo = (e) => {
    e.preventDefault()
    const text = inputValue.trim()
    if (!text) return

    setTodos([
      ...todos,
      {
        id: Date.now(),   // simple unique id using timestamp
        text,
        completed: false,
      },
    ])
    setInputValue("")     // clear the input after adding
  }

  // Toggle the completed state of a todo by its id
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Remove a todo from the list by its id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Delete all completed todos at once
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  // Derived state — filter without adding another useState
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true  // "all"
  })

  const activeTodoCount = todos.filter((t) => !t.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          📝 Todo App
        </h1>

        {/* Add todo form — controlled input */}
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2 rounded-xl border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 bg-white shadow-sm"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-sm transition-colors"
          >
            Add
          </button>
        </form>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo list — .map() creates a TodoItem for each todo.
            Each item MUST have a unique "key" prop so React can track it. */}
        <ul className="space-y-2">
          {filteredTodos.length === 0 ? (
            <li className="text-center text-gray-400 py-8">
              {filter === "completed"
                ? "No completed todos yet."
                : "Nothing to do! Add a task above."}
            </li>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </ul>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>{activeTodoCount} item{activeTodoCount !== 1 ? "s" : ""} left</span>
            {todos.some((t) => t.completed) && (
              <button
                onClick={clearCompleted}
                className="text-red-400 hover:text-red-600 transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
