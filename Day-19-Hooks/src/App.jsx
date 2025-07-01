import React, { useEffect, useMemo, useState } from 'react'
import Count from './components/Count'

function App() {
  const [count,setCount] = useState(0);

  const handleFetch = useMemo(()=>{
    console.log('fetch data');
  },[count])

 
  

  return (
    <>
      <h1>Hello From App Component</h1>
      <Count count={count}/>
      <button className='' onClick={()=> setCount(prev=>prev+1)} >Increment</button>
      <button onClick={handleFetch}>Fetch</button>
    </>
  )
}

export default App
