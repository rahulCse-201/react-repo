Here’s your **Redux Toolkit notes (same style, short + clear + interview ready)** — copy in one click 👇

---

```md
# 📘 Redux Toolkit — Quick & Clear Notes

---

## 🔹 1. What is Redux Toolkit?

Redux Toolkit is used for **centralized state management**.

👉 Solves complex state sharing  
👉 More structured than Context API  

---

## 🔹 2. Core Concepts

- Store → holds entire app state  
- Reducer → decides how state changes  
- Action → tells what to change  
- useSelector → read data  
- useDispatch → trigger change  

---

## 🔹 3. Data Flow

```

Component → dispatch(action) → reducer → store update → UI re-render

````

---

## 🔹 4. Store

```js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: todoReducer
})
````

👉 Store automatically gets **initial state from reducer**

---

## 🔹 5. Slice (Very Important)

```js
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload
      })
    }
  }
})
```

---

## 🔹 6. What Slice Provides

👉 `createSlice()` gives:

* Reducer
* Actions
* Initial state

```js
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
```

---

## 🔹 7. Initial State Flow

👉 Store does this internally:

```js
reducer(undefined, { type: '@@INIT' })
```

👉 So initialState comes from reducer

---

## 🔹 8. useSelector

```js
const todos = useSelector(state => state.todos)
```

👉 Used to read data

---

## 🔹 9. useDispatch

```js
dispatch(addTodo("Learn Redux"))
```

👉 Sends action to reducer

---

## 🔹 10. Action

```js
{
  type: "todo/addTodo",
  payload: "Learn Redux"
}
```

👉 Describes what to do

---

## 🔹 11. Immer (Important)

```js
state.todos.push(todo)
```

👉 Looks like mutation ❗
👉 Actually safe (Redux Toolkit uses Immer)

✔️ Converts into immutable update internally

---

## 🔹 12. Multiple Reducers

```js
configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer
  }
})
```

👉 State becomes:

```js
{
  todo: {...},
  user: {...}
}
```

---

## 🔹 13. Mental Model

```
Store → holds state  
Reducer → updates state  
Action → what happened  
Dispatch → triggers action  
Selector → reads state  
```

---

## 🔹 14. Key Rules

* Store = single source of truth
* Reducer = pure function
* State changes via actions only
* No direct mutation (handled by Immer)

---

# 🧠 Interview Questions

---

### ❓ Q1

Where does store get initial state?

👉 From reducer (`initialState`)

---

### ❓ Q2

What is a slice?

👉 Combination of:

* state
* reducers
* actions

---

### ❓ Q3

Difference between useSelector & useDispatch?

👉 useSelector → read data
👉 useDispatch → update data

---

### ❓ Q4

Can we mutate state in Redux Toolkit?

👉 Looks like yes
👉 Actually handled by Immer

---

### ❓ Q5

What happens when you call dispatch(addTodo())?

👉 Action created → sent to reducer → state updated → UI re-render

---

### ❓ Q6

Why Redux over Context?

👉 Better for large apps
👉 Structured + predictable

---

### ❓ Q7

What is reducer?

👉 Function:

```
(state, action) → new state
```

---

# 🚀 One Line Summary

👉 Redux Toolkit = **centralized state + structured updates**

```

---

If you want next (very important step):
👉 I can create **Context vs Redux comparison (real-world + interview level)** — this is where most students get stuck.
```
