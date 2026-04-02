import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
});




// here we create a new store that holds entire app state , it's like single source of truth for our app 
//  for store only need to pass reducer not state, Redux automatically call the reducer and once to get the initial state 