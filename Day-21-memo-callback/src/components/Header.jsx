import React, { memo } from 'react'

function Header() {
    let name = "dhaval";
    console.log("child render....");
    
  return (
    <>
   <div className='container'>
     <div className='d-flex justify-content-between align-items-center'>
    <nav className='navbar nav'>
        <a href="" className='nav-link text-dark'>Home</a>
        <a href="" className='nav-link text-dark'>about</a>
        <a href="" className='nav-link text-dark'>contact</a>
        <a href="" className='nav-link text-dark'>Blog</a>
    </nav> 
    <div className='profile'>
        Admin, {name}
    </div>
    </div>
   </div>
    </>
  )
}

export default memo(Header);
