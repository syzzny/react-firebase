import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : "user" ,
    initialState : {
        user : null,
    },
    reducers : {
        userLogin : (state, action) =>{
            state.user = action.payload
        },
        userLogOut : (state)=>{
            state.user = null;
        }
    }
})

export const { userLogin, userLogOut } = userSlice.actions
export default userSlice.reducer