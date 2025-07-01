import React from 'react'

function Dashboard(props) {
    let {name} = props;

  return (
    <>
        <h2>Welcome to Dashboard.</h2>
        <h3>Admin: {name}</h3> 
    </>
  )
}

export default Dashboard
