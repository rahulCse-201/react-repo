 # React State 
 State is the memory for particular component managed by react 
 it stores values that needs to remember between renders 

 Hooks like useState() allow a component to create and manage states 
 when state value change( using setter function). React re-runs the component with updated state 

 So conceptually:  
    • State → component’s memory  
    • Hooks → tools that allow components to use and manage that memory  
    • State update → triggers React to re-render the component    







# Context Api


this code create a context object, mainly this object contain provider and consumer 
This create a shared channel
```javascript
const UserContext = createContext();
```


Then we create provider 
### React Context Provider (Concept)

A **Context Provider** is a React component that wraps other components and makes certain data available to all of its child components.

The Provider receives `children` (the components inside it) and renders them while supplying a shared value through the context.

All components inside the Provider can access this shared data using `useContext()` without passing props manually through intermediate components.

In most cases, the Provider component holds the state (for example using `useState`) and shares both the state and the state updater function.

```javascript 
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
```

This line define data to share 
The Provider only exposes or shares that data through the value prop so child components can access it.
```javascript
<UserContext.Provider value={{user, setUser}}>
```


To access the value a component use useContext and extract any value 
```javascript 
const {setUser} = useContext(UserContext);
```




## Conclusion 

1️⃣ What problem Context solves

Context is used to avoid prop drilling.  
Instead of: 
  App → Navbar → Profile → Avatar

passing props through every component. 
Context lets components read shared data directly.

Three main pieces

Context Object
``` javacript 
<UserContext.Provider value={data}>
``` 

Provider
Defines what data is shared with children.

```javascript
<UserContext.Provider value={data}>
```


Consumer (useContext)
Allows components to read the shared data.
```javascriptconst 
value = useContext(UserContext)
```


3️⃣ Where the data actually lives

The data usually comes from state inside the Provider component.




# Another way of ContextApi use 

Provide default value / fallback value when create context 
```javascript
const Themecontext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
})
```

and also 