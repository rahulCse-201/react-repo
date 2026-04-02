import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }

})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;


/*
createSlice is a shortcut tool that combines 
    1. Initial state
    2. reducers 
    3. action creators     
 we can say  slice is one part of the global state and it's logicas

 state -> provide the state (data) to the component
 action -> an object that describes what happened , this trigger the action to update the state
For example : 
    dispatch(addTodo("Study Redux")) -> this create an action object 
    like this : 
    {
        type : "todo/addTodo",
        payload : "Study Redux"
    }


 Component → dispatch(action) → reducer → state update
*/