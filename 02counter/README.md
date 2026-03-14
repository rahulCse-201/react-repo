  # React Counter - understing useState()

  when we change normal variable in React component, the **UI does not update**. Even if the value changes, React does not re-render the UI, because React does not track normal variables 

  React only tracks:  
   • State  
   • Props  

   Solution: useState Hook  
   To allow Reack to track changes and update the UI, we use the useState hook.  
   useState used to store and update local state 

   React State Update Behavior
Multiple State Updates

Example:

setCount(count + 1)
setCount(count + 1)
setCount(count + 1)

Expected result: +3

Actual result: +1

Reason:

React batches state updates, and all updates use the same previous value of count.
  
2. useReducer

Used for complex state logic (alternative to useState).

const [state, dispatch] = useReducer(reducer, initialState)

dispatch() updates state → React re-renders.

3. useContext

Used to read shared state from a context.

If the context value changes → components using it re-render.