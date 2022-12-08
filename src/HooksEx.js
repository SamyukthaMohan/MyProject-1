
import {useEffect, useState} from 'react'
import React from 'react'
function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count+0)
        console.log(count)
    })
    
  return (
    <div>

         {count}
         <br/>
         <button onClick={()=>{setCount(count+1)}}>ClickMe</button>
         <br/><button onClick={()=>{setCount(count-200000)}}>ClickMe</button>
         <br/><button onClick={()=>{setCount(count+5000)}}>ClickMe</button>
   </div>
  )
  }
export default HooksEx