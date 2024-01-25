import React, { useState } from 'react'

const Greeting=({isUserLoggedIn})=>{  //const name=({}) props property or parameters ->passing the data values passed from main component
  return(
  <div>
        {isUserLoggedIn?(<h1>welco
            me to webpage</h1>):(<h1>login again</h1>)
        }
    </div>
  );
};
const Ter=()=>{
    const[userLoggedIn,setUserLoggedIn]=useState(false);
    return(
        <div>
            <Greeting isUserLoggedIn={userLoggedIn}/>
            <button onClick={()=>
            setUserLoggedIn(!userLoggedIn)}>login</button>
        </div>
    );
};
export default Ter;
//Arrow function {()=>} is concise way of writing JavaScript functions in shorter way.
