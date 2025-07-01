import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo:[]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{},
        removeTodo:(state,action)=>{}
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;