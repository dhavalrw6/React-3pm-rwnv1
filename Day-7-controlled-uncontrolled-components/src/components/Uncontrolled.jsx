import React, { useEffect, useRef, useState } from 'react'

function Uncontrolled() {
    const [value,setValue] = useState();
    const inputRef = useRef();
    const handleInput=()=>{
        console.log(inputRef);
        
        setValue(inputRef.current.value);
        inputRef.current.value = '';
        inputRef.current.focus();     
    }

    useEffect(()=>{
        inputRef.current.focus();     
    },[])

  return (
    <>
        <input type="text" ref={inputRef} /> <br />
        <button onClick={handleInput}>Submit</button>
        <h2>{value}</h2>
    </>
  )
}

export default Uncontrolled
