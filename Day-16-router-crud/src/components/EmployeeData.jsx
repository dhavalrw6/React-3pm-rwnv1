import React from "react";

function EmployeeData(props) {
    const {employeeData,handleDelete,handleEdit} = props;
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">E Name</th>
                  <th scope="col">Post</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    employeeData.map((employee,index)=>(
                        <tr key={employee.id}>
                            <td>{index+1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.post}</td>
                            <td>{employee.salary}</td>
                            <td>
                              <button onClick={()=> handleDelete(employee.id)} className="btn btn-danger">Delete</button>
                              <button onClick={()=> handleEdit(employee.id)} className="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeData;
