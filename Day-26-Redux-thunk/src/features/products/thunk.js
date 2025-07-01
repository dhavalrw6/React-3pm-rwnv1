import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('fetch/products',async()=>{
    let res = await axios.get('http://localhost:3000/products');
    return res.data;
})

export const createProduct = createAsyncThunk('create/product',async(product)=>{
    let res = await axios.post('http://localhost:3000/products',{...product,id:Date.now()});
    return product;
})

export const updateProduct = createAsyncThunk('update/product',async(product)=>{
    let res = await axios.put(`http://localhost:3000/products/${product.id}`,product);
    return product;
})

export const deleteProduct = createAsyncThunk('delete/product',async(id)=>{
    let res = await axios.delete(`http://localhost:3000/products/${id}`);
    return id;
})