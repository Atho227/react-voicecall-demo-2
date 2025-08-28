import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
})

export const { SetLoginStatus } = authSlice.actions
export default authSlice.reducer