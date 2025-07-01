import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Datatable from './pages/Datatable'

function App() {

  const [product,setProduct] = useState({});
  const [productsData,setProductsData] = useState([]);
  const [godown,setGodown] = useState([]);
  const [error,setError] = useState({});
  const imgRef = useRef();

  useEffect(()=>{
    let oldProduct = JSON.parse(localStorage.getItem('products')) || [];
    setProductsData(oldProduct)
  },[])

  const handleChange = (e)=>{
    let {name,value,checked,files} = e.target;

    if(name == 'godown')
    {
      let newGodown = [...godown];
      if(checked)
      {
        newGodown.push(value);
      }
      else
      {
        newGodown = newGodown.filter((val)=> val != value);
      }
      setGodown(newGodown);
      value = newGodown
    }

    if(files)
    {
      let file = files[0];
      let reader = new FileReader();

      reader.onloadend = ()=>{
        let data = {
          name: file.name,
          type: file.type,
          url : reader.result
        }
        value = data;
        setProduct({...product, [name]: value})
      }

      reader.readAsDataURL(file);

    }
    else{
      setProduct({...product, [name]: value})
    }
  }

  console.log(product);
  
  const validation = () =>{
    let errors = {};

    if(!product.product_name) errors.product_name = "Product Name is required";
    if(!product.price) errors.price = "Price is required";
    if(!product.stock) errors.stock = "Stock is required";
    if(!product.image) errors.image = "Image is required";
    if(!product.discription) errors.discription = "Discription is required";
    if(!product.godown) errors.godown = "Godown is required";
    
    setError(errors);
    console.log(errors);    
    return Object.keys(errors).length === 0;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!validation()) return;

    let newProductList = [...productsData,{...product , id:Date.now()}];
    setProductsData(newProductList);
    setProduct({});
    setGodown([]);
    imgRef.current.value = '';
    // localStorage.setItem('products',JSON.stringify(newProductList));
  }



  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form 
          handleChange={handleChange} 
          godown={godown}  
          product={product}
          handleSubmit={handleSubmit}
          imgRef={imgRef}
          error={error}
          />}
        />
        <Route path='/datatable' element={<Datatable productsData={productsData} />} />
      </Routes>
    </>
  )
}

export default App
