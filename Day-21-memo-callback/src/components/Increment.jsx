import React, { memo } from 'react'

function Increment({handleIncrement}) {
    console.log("child render....");
  return (
    <div>
       <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
    </div>
  )
}

export default memo(Increment);
