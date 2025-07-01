import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { deleteUser, editUser } from "../features/users/thunk";
const ViewUserData = ({updateUser}) => {

    const {users} = useSelector(state => state.users);
    const [viewIndex,setViewIndex] = useState(-1);
    const {error,loading,errorMsg} = useSelector(state =>state.users);

    const dispatch = useDispatch();
    const handleView = (index) =>{
        setViewIndex(index);
    }

   if(error) return <> <h2 className="text-danger text-center">{errorMsg}</h2> </>

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {
                loading ? (
                  <>
                  <tbody>
                    <tr>
                      <td align="center" className="h3" colSpan={4}>Loading user data.....</td>
                    </tr>
                  </tbody>
                  </>
                ) :
                
              (<tbody>
                {
                    users.map((user, index) =>{
                        const {id, email, password} = user;
                     return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{email}</td>
                            <td className="d-flex align-items-center">
                                <input disabled type={viewIndex != index ? 'password' : 'text'  } name="" className="form-control w-50 me-2" value={password} id="" />
                                {viewIndex != index ? <IoEyeSharp onClick={()=>handleView(index)} /> : <FaEyeSlash onClick={()=> handleView(-1)} />}
                            </td>
                            <td>
                                <button onClick={()=> dispatch(deleteUser(id))} className="btn btn-danger me-2">Delete</button> 
                                <button onClick={()=> updateUser(user)} className="btn btn-warning">Edit</button>
                            </td>
                        </tr>
                     )   
                    })
                }
              </tbody>)
              }
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserData;
