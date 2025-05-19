import { useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa'

function App() {
  const [hover, setHover] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback,setFeedback] = useState({});
  const [list,setList] = useState([]);

  const handleHover = (index)=>{
    setHover(index);
    
    if(star!=0)
    {
      setStar(0);
    }

  }

  const handleLeave =(index)=>{
      setHover(0);
      setStar(index);
  }

  const handleDown = (index)=>{
    setStar(index);
  }

  const handleChange=(e)=>{
    let {name,value} = e.target;
    setFeedback({...feedback, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    setList([...list,{...feedback,star :star}]);
    
  }
  
  console.log(list);
  
  return (
    <>
      <h1>Feedback</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
      {
        [...Array(5).keys()].map((_,index)=>(
          <FaStar 
           key={index} 
           onMouseOver={()=>handleHover(index+1)} 
           onMouseLeave={()=> handleLeave(index+1)} 
           onMouseDown={()=> handleDown(index+1)}
           color={hover>index || star > index ? "gold" : "gray"} 
           size={'18px'}  
          />
        ))
      }
      <br />
      <textarea name="message" id="" value={feedback.message || ''} onChange={handleChange} ></textarea>
      <br />
      <button >Submit</button>
      </form>

      <table>
        <thead>
          <tr>
          <th>No</th>
          <th>Star</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((val,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>
                  {
                    [...Array(5).keys()].map((_,index)=>(
                      <FaStar color={val.star > index ? "gold" : "gray"} size={'20px'} />
                    ))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default App
