import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import DataTable from "react-data-table-component";

const URL = "http://localhost:3000/product";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [editId,setEditId] = useState('');

  useEffect(() => {
    handleFatch();
  }, []);

  const handleFatch = async () => {
    let res = await axios.get("http://localhost:3000/product");
    let data = res.data;
    console.log(data);
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if(editId === '')
    {
       await axios.post(URL, { ...user, id: String(Date.now()) });
       toast.success('User added.');
    }
    else
    {
      let res = await axios.put(URL+'/'+editId,{...user});  
      toast.info('User Updated.');
      setEditId('');
    }

    setUser({});
    handleFatch();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async(id) => {
    let res = await axios.delete(URL +'/'+id);
    console.log(res);
    handleFatch();
    toast.warn('User Deleted.');

  };

  const handleUpdate = (id) => {
    let user = users.find((item) =>(item.id === id));
    setEditId(id);
    setUser(user);
    
  };

  return (
    <>
      <Header />
      <Form
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table
        users={users}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        setUsers={setUsers}
      />
      
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  );
}

export default App;
