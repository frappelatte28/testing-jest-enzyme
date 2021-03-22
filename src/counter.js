import React from 'react';
export default function Counter(){
    const [counter, setCounter] = React.useState(0);
    return(
        <div>
            <div><h1>App for testing</h1></div>
            <div id="counterValue">{counter}</div>
            <button id="incrementBtn" onClick={()=>setCounter(counter + 1)}></button>
        </div>
    )
}