import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0);
    //first tyoe of useEffect 70% used
    // useEffect(()=>{
    //     console.log("hello inside from use effect");
    // },[])


                    //second type 25% used
                //     useEffect(()=>{
                // console.log("This is the second type of useeffect");
                //     },[count])

//third type of use effect not commonly used
 useEffect(()=>{
    console.log("Hi i am third type of useeffect");
 })


  return (
    <div>
        <h1>Count{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>count  {count2}</h2>
        <button onClick={()=>setCount2(count2-1)}>-</button>
    </div>
  )  
}

export default UseEffect