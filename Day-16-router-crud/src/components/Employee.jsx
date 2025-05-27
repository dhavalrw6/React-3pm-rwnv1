import React from "react";

function Employee(props) {
  const { employee, handleInputChange, handleFormSubmit } = props;

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <form action="" method="post" onSubmit={handleFormSubmit}>
              <h2>Employee</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  value={employee.name || ""}
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="post" className="form-label">
                  Post
                </label>
                <input
                  onChange={handleInputChange}
                  value={employee.post || ""}
                  type="text"
                  name="post"
                  id="post"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  onChange={handleInputChange}
                  value={employee.salary || ""}
                  type="text"
                  name="salary"
                  id="salary"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
