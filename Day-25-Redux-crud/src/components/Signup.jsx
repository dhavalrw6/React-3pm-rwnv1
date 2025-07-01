import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/user/userSlice";

function Signup() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch()

  let {editData} = useSelector(state => state.users);

  useEffect(()=>{  
    setUser({...editData[0]});
  },[editData])

  const handleChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createUser({...user,id:Date.now()}))
    setUser({});
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={user.email || ''}
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  value={user.password || ''}
                  className="form-control"
                  name="password"
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
}

export default Signup;
