import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../features/user/userSlice";

const ViewUserData = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">email</th>
                  <th scope="col">password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button onClick={()=> dispatch(deleteUser(user.id))} className="btn btn-danger">Delete</button>
                      <button onClick={()=> dispatch(updateUser(user.id))} className="btn btn-warning">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserData;
