// import React, { useState } from 'react'
// import "./Counter.css";
// export default function Counter() {
//     const [count , setCount]=useState(0);
//     const [countneg , setCountneg]=useState(0);
//     const [countmul , setCountmul]=useState(1);
//   return (
//     <div className='counter'>
//         <p>{count} </p>
//         <button onClick={() => setCount(count + 25)
//         }>click for add</button>
//         <p>{countneg}</p>
//         <button onClick={() => setCountneg(countneg - 25)
//         }>click for negative</button>
//         <p>{countmul}</p>
//         <button onClick={() => setCountmul(countmul * 25)
//         }>click for multiple</button>
//     </div>
//   )
// }
import React, { useState } from 'react'
import "./Counter.css";
//import { set } from 'mongoose';
export default function Counter() {
    const [count , setCount]=useState(0);
    const incrementCount=()=>{
      setCount(count+1);
    };
    const decrementCount=()=>{
      setCount(count-1);
    };
    const resetCount=()=>{
      setCount(0);
    };

    return(
      <div className='counter'>
        <div className='box'>
         <div className='new'><h1>counter: {count}</h1>
         <div className='samp'>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>decrement</button>
            <button onClick={resetCount}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
}