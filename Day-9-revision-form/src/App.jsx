import React, { useEffect, useRef, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editIndex,setEditIndex] = useState(-1);

  const btnRef = useRef();

  useEffect(()=>{
    let oldList = JSON.parse(localStorage.getItem('users')) || [];
    setList(oldList);
  },[])

  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(list));
  },[list])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();

    if(editIndex === -1)
    {
      setList([...list, {...user,id}]);
    }
    else
    {

      let data = list.map((val)=>{
          return val.id === editIndex ? {...user} : val;
      })
      setList(data);
      setEditIndex(-1);
      btnRef.current.innerText = "Login";
    }
    setUser({});
  };

  const handleDelete = (id)=>{
    let newList = list.filter((user,index)=>user.id !== id);
    setList(newList);
  }

  const handleEdit = (id)=>{
    let user = list.filter((user,index)=>user.id == id)[0];
    
    setEditIndex(id);
    setUser(user);
    btnRef.current.innerText = "Update";
  }
  console.log(editIndex);
  // console.log(list);
  console.log(list);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2>Sign-up</h2>
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email || ""}
                    onChange={handleChange}
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
                    id="exampleInputPassword1"
                    name="password"
                    value={user.password || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button ref={btnRef} type="submit" className="btn btn-primary">
                Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((user,index)=>{
                    const {id,email,password} =user;
                    return (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button onClick={()=> handleDelete(id)} className="btn btn-danger">Delete</button>
                        <button onClick={()=> handleEdit(id)} className="btn btn-warning">Edit</button>
                      </td>
                    </tr>
                  )})
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
