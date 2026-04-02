import {createContext, useContext} from "reac"

export const TodoContext = createContext({
    todos:[],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    togglecomplete: (id)=>{}
})