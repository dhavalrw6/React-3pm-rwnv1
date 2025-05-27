import React, { useEffect, useState } from 'react'
import Employee from './components/Employee'
import EmployeeData from './components/EmployeeData'
import Header from './components/Header'
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [employee, setEmployee] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  const navigator = useNavigate();

  const handleInputChange = (event) =>{
      let {name, value} = event.target;
      setEmployee({...employee, [name]: value});
  }

  const handleFormSubmit = (event) =>{
      event.preventDefault();
      let newEmployee = [...employeeData,{...employee, id:Date.now()}];
      setEmployeeData(newEmployee);
      setEmployee({});
      // navigator('/view');
     localStorage.setItem('employee',JSON.stringify(newEmployee))   
  }

  const handleDelete = (id) =>{
    let newData = employeeData.filter((val)=> val.id !== id);
    setEmployeeData(newData);
    localStorage.setItem('employee',JSON.stringify(newData));
  }

  const handleEdit = (id) =>{
    let editEmployee = employeeData.find((val)=> val.id === id);
    setEmployee(editEmployee);
    navigator('/');
  }

  useEffect(()=>{
    const storedEmployee = JSON.parse(localStorage.getItem('employee')) || [];
    setEmployeeData(storedEmployee);
  },[])

  return (
    <>
      <Header/>
       <Routes>
        <Route  
          path="/" element={<Employee 
          employee={employee}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />} />
        <Route
          path="/view"
          element={<EmployeeData 
            employeeData={employeeData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />}
        />
       </Routes>
    </>
  )
}

export default App
