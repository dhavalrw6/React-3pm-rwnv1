import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Datatable from './pages/Datatable'

function App() {

  const [product,setProduct] = useState({});
  const [productsData,setProductsData] = useState([]);
  const [godown,setGodown] = useState([]);

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
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    let newProductList = [...productsData,{...product , id:Date.now()}];
    setProductsData(newProductList);
    setProduct({});
    setGodown([]);
    localStorage.setItem('products',JSON.stringify(newProductList));
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
          />}
        />
        <Route path='/datatable' element={<Datatable productsData={productsData} />} />
      </Routes>
    </>
  )
}

export default App
