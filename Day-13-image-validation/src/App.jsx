import React, { useRef, useState } from "react";

function App() {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const fileRef = useRef();

  const handleChange = (e)=>{
    let {name, value, files} = e.target;

    if(files)
    {
      let file = files[0];
      let reader = new FileReader();
      reader.onloadend = ()=>{
        let fileData={
          name: file.name,
          type:file.type,
          url:reader.result
        }
        setUser({...user,fileData})
      }
      reader.readAsDataURL(file);
    }
    else{
      setUser((prev)=> ({...prev,[name]:value}));
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUsers((prev)=> ([...prev, {...user,id:Date.now()}]))
  }

  console.log(user);
  

  return (
    <>
      <section className="form">
        <div className="conatiner">
          <div className="row mt-5">
            <div className="col-md-6 mx-auto">
              <form method="post" onSubmit={handleSubmit}>
                <h2>Profile</h2>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={user.email || ''}
                    className="form-control"
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
                    name="password"
                    onChange={handleChange}
                    value={user.password || ''}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    ref={fileRef}
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <table className="table table-dark table-hover table-striped caption-top">
                <caption>
                  <h2>User Data</h2>
                </caption>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      users.map((user, index) =>(
                        <tr key={user.id}>
                          <td>{index+1}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                          <td>
                            <img src={user.fileData ? user.fileData.url : '' } 
                            alt={user.fileData ? user.fileData.name : '' } 
                            style={{width:100}}
                            />
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
