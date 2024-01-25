import React, { useState } from 'react'
export default function Counter() {
    const [count , setCount]=useState(0);
    const [countneg , setCountneg]=useState(0);
    const [countmul , setCountmul]=useState(1);
  return (
    <div>
        <p>{count} </p>
        <button onClick={() => setCount(count + 25)
        }>click for add</button>
        <p>{countneg}</p>
        <button onClick={() => setCountneg(countneg - 25)
        }>click for negative</button>
        <p>{countmul}</p>
        <button onClick={() => setCountmul(countmul * 25)
        }>click for multiple</button>
    </div>
  )
}