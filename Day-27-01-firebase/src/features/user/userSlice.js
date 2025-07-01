import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./thunk";


const initialState={
    users : [],
    loading : false,
    error : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload);
            state.users.push(action.payload);
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})




export default userSlice.reducer;