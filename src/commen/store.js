import { configureStore } from "@reduxjs/toolkit";
// import adminReducer from './admin_slice'
import userReducer from './user_slice'



const store = configureStore({
    reducer:{
        // admin : adminReducer,
        user : userReducer
    }
})

export default store