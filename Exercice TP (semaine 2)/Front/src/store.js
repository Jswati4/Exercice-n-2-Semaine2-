import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer:{
        [userSlice.name]: userSlice.reducer
    }
})

export default store