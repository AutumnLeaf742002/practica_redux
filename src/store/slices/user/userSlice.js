import { createSlice } from "@reduxjs/toolkit";

import users from "../../data/users.json"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: users
    },

    reducers: {

        addUser: (state, action)=>{
            
            state.users.push(action.payload)
        },

        updateUser: ( state, action )=>{
            
            throw new Error("Not implemented")
        },

        deleteUser: ( state, action )=>{
            
            throw new Error("Not implemented")
        },
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions