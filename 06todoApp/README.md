# 06 Todo App

A classic **Todo List** application built with React + Vite + Tailwind CSS.

## What You'll Learn

### 1. List Rendering with `.map()` and `key` props
React renders lists by mapping an array to JSX elements. Every element **must** have a unique `key` prop so React can efficiently update the DOM.

```jsx
todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
```

### 2. Controlled Inputs
The text input's value is driven by React state. Every keystroke calls `setInputValue`, keeping the UI in sync.

```jsx
<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
```

### 3. CRUD Operations via State Updates
- **Add** — spread existing array and append new object  
- **Toggle** — `map` replaces the matching item  
- **Delete** — `filter` removes the matching item

### 4. `useEffect` for Side Effects
Syncing state to `localStorage` is a *side effect* — it touches something outside React. `useEffect` runs after every render where `todos` changed.

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
```

### 5. Lazy Initial State
Pass a function to `useState` to run expensive initialisation only once (on mount):

```jsx
const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos")
  return saved ? JSON.parse(saved) : []
})
```

### 6. Derived State (no extra `useState`)
The filtered list is computed from existing state — no need for a separate `filteredTodos` state variable.

```jsx
const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed
  if (filter === "completed") return todo.completed
  return true
})
```

### 7. Callback Props (Child → Parent Communication)
`TodoItem` receives `onToggle` and `onDelete` as props. This is how child components communicate back to their parent in React.

## Features
- ✅ Add, complete, and delete todos
- 🔍 Filter by All / Active / Completed
- 🧹 Clear all completed todos at once
- 💾 Persisted to `localStorage` — survives page refresh

## Getting Started

```bash
npm install
npm run dev
```
