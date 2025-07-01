import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from './features/user/thunk';

function App() {

  const dispatch = useDispatch();

  const handleSubmit = ()=>{
    dispatch(createUser({name:"John", email:"john@example.com"}));
  }

  return (
    <>
      <button onClick={handleSubmit}>Create User</button>
    </>
  )
}

export default App
