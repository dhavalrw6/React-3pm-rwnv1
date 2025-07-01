import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../features/products/thunk';

function AddProductData() {
    const [product,setProduct] = useState({});
    const dispatch = useDispatch();

    const handleProductChange = (e) =>{
        let {name,value} = e.target;
        setProduct({...product,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createProduct(product));
    }

  return (
    <>
     <form onSubmit={handleSubmit}>
        <h2>Add Product Data</h2>
        <div className="mb-3">
            <label htmlFor="pname" className="form-label">Product Name</label>
            <input type="text"  onChange={handleProductChange} value={product.pname} name='pname'  className="form-control" id="pname" />
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" onChange={handleProductChange} value={product.price} name='price' className="form-control" id="price" />
        </div>
        <div className="mb-3">
            <label htmlFor="discription" className="form-label">Discription</label>
            <input type="text" onChange={handleProductChange} value={product.discription} name='discription' className="form-control" id="discription" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </>
  )
}

export default AddProductData
