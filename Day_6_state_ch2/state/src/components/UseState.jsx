import React, { useState } from 'react'

function UseState() {
    const [name,setName] = useState("Dhaval");
    const [age,setAge] = useState(61);
    const [isValid,setIsValid] = useState(false);
    const [user,setUser] = useState({
        name : 'Rajesh',
        email : 'rajesh@gmail.com',
        mobile : 646554654,
        password:'raj@123'
    });

    const [arr,setArr] = useState([23,4,5,6,76]);

    const handleFatch=()=>{
        console.log(name);
        console.log(user);
        
    }


  return (
    <>
        <h2>Name: {name}</h2>  
        <button onClick={handleFatch} >fatch Data</button>  
    </>
  )
}

export default UseState
