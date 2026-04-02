# 📘 React Context API — Complete Notes

## 🔹 1. What is Context API?

Context API is used to **share data across components** without passing props manually (avoids prop drilling).

👉 Not truly global  
👉 Works within a **component tree (subtree)**  

---

## 🔹 2. Basic Flow

CreateContext -> Provider -> usecontext  


---

## 🔹 3. Old vs New Pattern

### ✅ Old Pattern (Custom Provider)

- Create context  
- Create Provider component  
- Define state inside Provider  
- Pass value via Provider  

```js
const Provider = ({ children }) => {
  const [data, setData] = useState()

  return (
    <Context.Provider value={{ data, setData }}>
      {children}
    </Context.Provider>
  )
}

```

### ✅ New Pattern (Simplified)

- Create context with default value (structure)
- Export Provider directly
- Create custom hook for use useContext , no need extra import 
- Manage state outside

```js
export const Context = createContext({
  data: null,
  setData: () => {}
})

export const Provider = Context.Provider

export const useMyContext = () => useContext(Context)
```

```js
<Provider value={{ data, setData }}>
```

## 🔹 4. Important concept 

### 📌 context does not store state 
State is create using useState() and pass to value at provider time 

- Data in context api provide at provider wrapup time 
```js
const [user, setUser] = useState('');
const [time, setTime] = useState(0);

<Provider value = {{user , time ,setUser, setTime}}>

```

### 📌 Default Value
- Default value is basically use to prvent crash of the app   
- Default value is necessary if provider creation time not provide (as older version )

this will crash the app   
"Cannot destructure property 'data' of undefined"
```js 
const { data } = useContext(Context)
``` 
### 📌 What you can pass in context? 

Anything:

- state
- functions
- objects
- APIs


## 🔹Mental Model

```
useState → creates data  
Provider → sends data  
Context → carries data  
useContext → receives data  

```


## 🔹 Passing Functions & State in Context

* You can pass **anything** in `value`:

  * state
  * functions
  * objects

```js
<Provider value={{ themeMode, lightTheme, add }}>
```

---

## 🔹 Important Rules

### 📌 1. Only `value` matters

* Context does NOT care:

  * where function is defined ❌
  * which file ❌

* It ONLY cares:

```text
what is inside value object ✅
```

---

### 📌 2. Inside vs Outside Provider

```text
Inside Provider → access ✅  
Outside Provider → no access ❌
```

---

### 📌 3. Not Provided = undefined

```js
<Provider value={{ add }}>
```

```js
const { add, subb } = useContext(Context)
```

```text
add  → available ✅  
subb → undefined ❗
```

⚠️ Error only if you call it:

```js
subb() ❌
```

---

## 🔹 Mental Model

```text
value object = what you expose  
Provider = boundary  
Components = access only exposed things  
```


🔹 1. Default value format in Context

👉 You can pass anything:

createContext("light")       // string ✅
createContext(0)             // number ✅
createContext([])            // array ✅
createContext({})            // object ✅ (most common)
Why object is used?
Because we usually pass multiple things (state + functions)