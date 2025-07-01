import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, fetchUser } from "../features/users/thunk";

const UserSignIn = ({user,setUser,editId,setEditId}) => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser());
  },[])

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId !== null){
      console.log(user);      
      dispatch(editUser({...user}));
      setEditId(null);
    }
    else
    {
      dispatch(createUser(user));
    }
    setUser({});
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={user.email || ''}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={user.password || ''}
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
