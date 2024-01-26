import React from 'react'
import { useReducer } from 'react'
import "../Css/Reducer.css";
const counterReducer=(state,action)=>{
    switch(action.type){
        case "Increment":
           return{count:state.count+1};
        case "Decrement":
           return{count:state.count-1};
           case "Reset":
           return{count:0};
        default:
            return state;

    }
};
export default function Reducer() {
    const [state,dispatch]=useReducer(counterReducer,{count:0});
  return (
    <div className='service-item' style={{textAlign: 'center', margin: '20px' }}>
        <p>Count:{state.count}</p>
        <button onClick={() =>dispatch({type: "Increment"})}>Add</button>
        <button onClick={() =>dispatch({type: "Decrement"})}>Sub</button>
        <button onClick={() =>dispatch({type: "Reset"})}>Reset</button>
    </div>
  )
}
