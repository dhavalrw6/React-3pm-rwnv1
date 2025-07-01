import React from 'react'

function HigherOrderComponent(Component) {
  let isAuth = true;
  const WrappedComponent= (props)=>{
    return isAuth ? <Component {...props}  /> 
    : 
    <>
      <h2>Welcome To Home Page. </h2>
    </>   
  }
  return WrappedComponent;
}

export default HigherOrderComponent
