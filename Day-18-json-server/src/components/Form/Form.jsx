import React from 'react'

function Form({user,handleSubmit,handleChange}) {
  return (
    <>
     <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name='email'
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
                  name='password'
                  onChange={handleChange}
                  value={user.password || ''}
                  className="form-control"
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
  )
}

export default Form
