import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'

const store = configureStore({
    reducer :{
        auth :authSlice

        // Todod: add more slice here like postSlice, commentSlice, etc
    }
})

export default store;