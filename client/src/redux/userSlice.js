import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false,
        cart: {
            products: [],
            quantity: 0,
            total: 0,
        }
    },
    reducers:{

        loginStart: (state)=>{
            state.isFetching = true;
        },
        loginSuccess: (state, action) =>{
            state.isFetching= false;
            state.currentUser = action.payload;
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null; // Clear currentUser
        },
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})


export const {
    loginStart, 
    loginFailure, 
    loginSuccess ,
    logout,
    registerStart,
    registerFailure,
    registerSuccess
} = userSlice.actions
export default userSlice.reducer