import React, { useRef } from 'react'

function Test() {
    const headingRef = useRef();


    const handleRef=()=>{
        headingRef.current.style.color = 'red';
        headingRef.current.style.background = 'tan';
        headingRef.current.style.fontSize = '56px';
        headingRef.current.style.transitionProperty = 'all';
        headingRef.current.style.transitionDuration = '0.4s';
        headingRef.current.style.transitionTimingFunction = 'linear';
    }

  return (
    <>
     <h2 onMouseOver={handleRef} ref={headingRef}>Red & White Skill Eduction</h2>
     <br />
    </>
  )
}

export default Test
