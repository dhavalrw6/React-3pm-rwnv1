import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    editIndex : null,
    editData : []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        createUser:(state,action)=>{
            
            if(state.editIndex !== null)
            {
                state.users = state.users.map(user=> {
                if(user.id === state.editIndex){
                    user = action.payload;
                }
                return user;
                })
                state.editIndex = null;
                state.editData = [];
            }
            else
            {
                state.users.push(action.payload);
            }

        },
        deleteUser:(state,action)=>{
            state.users = state.users.filter(user=> user.id !== action.payload);
        },
        updateUser:(state,action)=>{
            state.editIndex = action.payload

            let editData = state.users.filter(user=> user.id === action.payload);
            
            state.editData = editData;
        },
    }
})

export default userSlice.reducer;


export const {createUser,displayUser,deleteUser,updateUser} = userSlice.actions;