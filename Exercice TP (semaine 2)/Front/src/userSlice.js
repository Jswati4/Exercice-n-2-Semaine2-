import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        username: "",
        lastname: ""
    },
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload
        },
        changeLastname: (state, action) => {
            state.lastname = action.payload
        }
    }
})

export default userSlice

export const { changeLastname, ch } = userSlice.actions