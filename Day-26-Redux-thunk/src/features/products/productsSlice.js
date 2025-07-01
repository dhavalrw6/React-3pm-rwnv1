import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, fetchProducts } from "./thunk";

const initialState = {
    products: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(createProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products.push(action.payload);
        })
        builder.addCase(createProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        // fetch Product data 
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        // delete product 
        builder.addCase(deleteProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = state.products.filter((product)=> product._id !== action.payload);
            console.log(action.payload);
            
        })
        builder.addCase(deleteProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
})


export default productSlice.reducer;