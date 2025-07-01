import React, { useState } from 'react'
import UserSignIn from './components/UserSignIn'
import ViewUserData from './components/ViewUserData'

const App = () => {
  const [user,setUser] = useState({});
  const [editId,setEditId] = useState(null);
  const updateUser =(user)=>{
    setUser(user);
    setEditId(user.id);
  }
  return (
    <>
       <UserSignIn user={user} setUser={setUser} editId={editId} setEditId={setEditId} />
       <ViewUserData updateUser={updateUser} />
    </>
  )
}

export default App
