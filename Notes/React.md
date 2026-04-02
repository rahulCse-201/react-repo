# 

# 📘 Custom Hooks — Quick Revision

## 🔹 What is a Custom Hook?

A function that uses React hooks (`useState`, `useEffect`, `useContext`, etc.) to reuse logic.

---

## 🔹 1. Basic Context Hook

```js
export const useMyContext = () => useContext(Context)
```

---

## 🔹 2. Safe Context Hook (Best Practice)

```js
export const useMyContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error("Must be used inside Provider")
  }

  return context
}
```

---

## 🔹 3. Context + Logic (Recommended)

```js
export const useUser = () => {
  const { user, setUser } = useContext(Context)

  const login = (name) => setUser(name)
  const logout = () => setUser(null)

  return { user, login, logout }
}
```

---

## 🔹 4. Multiple Contexts

```js
export const useAppData = () => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return { ...user, ...theme }
}
```

---

## 🔹 5. Reusable Logic (No Context)

```js
export const useCounter = () => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(c => c + 1)
  const dec = () => setCount(c => c - 1)

  return { count, inc, dec }
}
```

---

## 🔹 Key Idea

```
Custom Hook = Reuse Logic + Clean Code + Abstraction
```

#

#

# 📘 React Core Concepts — Revision Notes

---

# 🔹 1. Arrow Functions (Quick Wrap-up)

### ✅ Basic

```js
const add = (a, b) => a + b
```

### ✅ With `{}` → need return

```js
const add = (a, b) => {
  return a + b
}
```

### ⚠️ Returning object
- any statment that is more than one line use ()

```js
const getUser = () => ({ name: "Rahul" })
```

---

# 🔹 2. Spread Operator (`...`)
Used to :
- copy objects/arrays
- merge objects/arrays
- add new properties/elements
- copy with overwrite any property of object/array


### 📌 Copy & Merge

```js
const obj = { a: 1 }
const newObj = { ...obj, b: 2 }
```

### 📌 React use case

```js
setUser(prev => ({ ...prev, name: "Rahul" }))
```

⚠️ Shallow copy only

---

# 🔹 3. Local Storage (Very Short)

👉 Browser storage (key-value)  
- it is manage by browser and store in browser files 
- This is permanent 

🔹 Limits & behavior  
- Size: ~5MB per site
- Only stores strings
- No expiration (until manually cleared)




```js 
localStorage.setItem("theme", "dark")
localStorage.getItem("theme")
```

✔ Persistent (survives refresh)
❗ Stores only strings

---

# 🔹 4. React Lifecycle (Core Idea)

```text
Mount → Update → Unmount
```

* Mount → component appears
* Update → state/props change → re-render
* Unmount → component removed (cleanup)

---

## 🔹 Mount & Unmount

### ✅ Mount

```text
Component appears on screen
```

### ❌ Unmount

```text
Component removed from screen
```

```js
{show && <Child />}
```

* `show = true` → Mount
* `show = false` → Unmount

---

# 🔹 5. useEffect (Core Working)


👉 Runs AFTER render

```js
useEffect(() => {
  console.log("Effect") // run on mount

  return () => {
    console.log("Cleanup") // run on unmount 
  }
}, [])
```

---

## 📌 3 Cases

### 1. Run once (mount)

```js
useEffect(() => {}, [])
```

### 2. Run on change

```js
useEffect(() => {}, [count])
```

### 3. Run always

```js
useEffect(() => {})
```

---

📌 Trigger Flow

```text
State/props change  
→ Render  
→ useEffect runs
```

---

## Effect + Cleanup
React handle useEffect in 2 phases 
1. Effect phase 
2. Cleanup phase

```js
useEffect(() => {
  console.log("Effect") // run on mount

  return () => {
    console.log("Cleanup") // run on unmount or before next effect
  }
}, [])
```

---

### 📌 How it works

 On Mount:

```text
Effect runs  
Cleanup stored (NOT executed)
```

 On Unmount:

```text
Stored cleanup runs
```

---

 📌 Meaning

```text
Effect → start something  
Cleanup → stop/undo it  
```

---

 📌 Example

```js
useEffect(() => {
  const id = setInterval(() => console.log("run"), 1000)

  return () => clearInterval(id)
}, [])
```

---

# 🔹 6. Strict Mode

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

👉 Development only tool

---

## 📌 What it does
- extra mount/unmount cycle (runs effects twice)
- detects unsafe side effects
- To detect bugs & unsafe side effects

```text
Mount → Effect  
Unmount → Cleanup  
Mount → Effect
```

👉 Runs lifecycle twice (DEV only)

## 📌 Important

```text
Production → runs once  
Development → runs twice
```

---

## Combined Flow (FINAL)

### Without StrictMode

```text
Mount → Effect  
Update → Re-render  
Unmount → Cleanup
```

---

### With StrictMode (DEV)

```text
Mount → Effect  
Unmount → Cleanup  
Mount → Effect  

(Real unmount later → Cleanup)
```

---

# 🔹 10. Final Mental Model

```text
Component appears → Mount  
→ useEffect runs  

Component updates → Re-render  
→ Effect may run (based on deps)  

Component removed → Unmount  
→ Cleanup runs  

StrictMode → simulates mount/unmount twice (DEV)
```

---

## 🔹 Key Takeaways

* `useEffect` runs after render
* Cleanup runs on unmount or before next effect
* Return in useEffect = function for later
* StrictMode is for testing, not production
* Mount ≠ Update ≠ Unmount

---


