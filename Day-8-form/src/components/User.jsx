import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({});
  const [list,setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list,user])
    setUser({});    
  };

  console.log(list);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form  method="post" onSubmit={handleSubmit}>
            <h2>Login</h2>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  username
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  name="username"
                  id="username"
                  value={user.username || ''}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  email
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  value={user.email || ''}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  password
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  name="password"
                  id="password"
                  value={user.password || ''}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ul>
        {
            list.map((user, index) =>(
                <li>{user.username}</li>
            ))
        }
      </ul>
    </>
  );
}

export default User;
