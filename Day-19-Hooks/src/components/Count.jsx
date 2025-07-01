import React,{memo} from 'react'

function Count({count}) {
    console.log("count render....");
    
  return (
    <>
        <h2>Count: {count}</h2>
    </>
  )
}

export default memo(Count);
