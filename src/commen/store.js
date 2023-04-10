import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './admin_slice'


const store = configureStore({
    reducer:{
        admin : adminReducer,
        
    }
})

export default store