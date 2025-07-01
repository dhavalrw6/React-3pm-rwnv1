import React, { useRef, useState } from "react";
import DataTable from "react-data-table-component";

function Table({ users, handleDelete, handleUpdate, setUsers }) {
  const serchRef = useRef();
  const [textFilter, setTextFilter] = useState("");
  let columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            {console.log(row.id)}

            <button
              onClick={() => handleDelete(row.id)}
              className="btn btn-danger me-1"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(row.id)}
              className="btn btn-warning"
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];

  let usersData = users.filter((user) => {
    return user.email.toLowerCase().includes(textFilter.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="">
              <input
                type="text"
                ref={serchRef}
                className="form-control"
                name="search"
                onChange={(e) => setTextFilter(e.target.value)}
                id=""
              />
              <DataTable
                title="User Data"
                columns={columns}
                data={usersData}
                pagination
                selectableRows
                highlightOnHover
                pointerOnHover
                responsive
                fixedHeader
                fixedHeaderScrollHeight="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
