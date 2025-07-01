import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const DataTableExample = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@outlook.com' },
    { id: 4, name: 'Sara Lee', email: 'sara@gmail.com' },
    { id: 5, name: 'David Kim', email: 'david@yahoo.com' },
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@outlook.com' },
    { id: 4, name: 'Sara Lee', email: 'sara@gmail.com' },
    { id: 5, name: 'David Kim', email: 'david@yahoo.com' },
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@outlook.com' },
    { id: 4, name: 'Sara Lee', email: 'sara@gmail.com' },
    { id: 5, name: 'David Kim', email: 'david@yahoo.com' },
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@outlook.com' },
    { id: 4, name: 'Sara Lee', email: 'sara@gmail.com' },
    { id: 5, name: 'David Kim', email: 'david@yahoo.com' },
    { id: 1, name: 'John Doe', email: 'john@gmail.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@yahoo.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@outlook.com' },
    { id: 4, name: 'Sara Lee', email: 'sara@gmail.com' },
    { id: 5, name: 'David Kim', email: 'david@yahoo.com' },
  ];

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  // Filter logic
  const filteredData = data.filter(
    item =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Filter by Name"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />
      <DataTable
        title="User List"
        columns={columns}
        data={filteredData}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        highlightOnHover
        pointerOnHover
        responsive
        fixedHeader
        fixedHeaderScrollHeight="300px"
      />
    </div>
  );
};

export default DataTableExample;
