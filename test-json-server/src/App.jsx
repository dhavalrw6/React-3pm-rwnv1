import axios from 'axios'
import React from 'react'

function App() {


  const handleFetch = async()=>{
  let recode =await axios.get('http://localhost:3000/posts');
    console.log(recode.data);    
  }

  const handleAddData=async()=>{
    let obj = { "id": "3", "title": "Dhaval", "views": 120 };
    let response = await axios.post('http://localhost:3000/posts',obj);
    console.log(response);
    
  }

  return (
    <>
      <button onClick={handleFetch} type='button'>Fatch</button>
      <button onClick={handleAddData} type='button'>add new data</button>
    </>
  )
}

export default App
