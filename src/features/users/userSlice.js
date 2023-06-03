import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    userLogin: localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : null
}


export const userSlice = createSlice({
    name: 'Login',
    initialState: initialState,
    reducers: {
        LoginUser: (state, action) =>{
            state.userLogin = action.payload
        }
    }
})


export const {LoginUser} = userSlice.actions

export default userSlice.reducer;