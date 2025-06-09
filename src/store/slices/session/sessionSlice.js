import { createSlice } from "@reduxjs/toolkit"

export const sessionSlice = createSlice({

    name: "session",
    initialState: JSON.parse(localStorage.getItem("session"))??{
        logged: false,
        userLogged: {

        }
    },

    reducers: {

        startSession: ( state, action ) => {
            
            state.logged = true
            state.userLogged = action.payload
            localStorage.setItem("session", JSON.stringify({
                logged: state.logged,
                userLogged: state.userLogged
            }))
        },

        closeSession: ( state ) => {

            state.logged = false
            state.userLogged = {}
            localStorage.removeItem("session")
        },
    }
})

export const { startSession, closeSession } = sessionSlice.actions 