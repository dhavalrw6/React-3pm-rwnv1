import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo:[]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo:()=>{},
        removeTodo:()=>{},
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;