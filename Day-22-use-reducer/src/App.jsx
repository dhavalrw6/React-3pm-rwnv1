import React, { useReducer } from 'react'


const reducer = (state,action)=>{
  console.log(state);
  
  switch(action.type)
  {
    case 'increment':
      return {...state,count :state.count+1}
    case 'decrement':
      return {...state,count :state.count+1}
    case 'reset':
      return {...state,count :0}
    default:
      return state;
  }

}

function App() {


  const [state,dispatch] = useReducer(reducer,{count:0});
  
  return (
    <>
        <h2>count: {state.count}</h2>
        <button onClick={()=> dispatch({type:'increment'})}>increment</button>
        <button onClick={()=> dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=> dispatch({type:'reset'})}>reset</button>
    </>
  )
}

export default App
