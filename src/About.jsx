import React, { useState } from 'react'

function About() {

    const [count, setCount] = useState(0);
  return (
  <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </>
  )
}

export default About