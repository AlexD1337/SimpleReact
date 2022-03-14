import React from "react";
import {useState} from 'react';

function unlock(c1,c2,c3,c4,a,b,c,d){
    if (c1 == a && c2==b && c3==c &&c4==d)
    {
        alert("Congrats! You get nothing... What else did you expect?");
    }else{
        alert("That's the wrong code moron");
    }
}



function Lock(){

    var zero = 0;

    const randomNumber = 1423

    var firstNumber = 1;
    var secondNumber = 4;
    var thirdNumber = 2;
    var fourthNumber = 3;

    const [state, setState] = useState({ 
        count:0,
        count1:0,
        count2:0,
        count3:0,
        
    })

    const handleClick = val =>
    setState({
      ...state,
      
      [val]: state[val] + 1,

    })

    const reset = val =>
    setState({
      ...state,
      
      [val]: 0,

    })


  const { count, count1,count2,count3 } = state

    return(
        <div className="wrapper">
        <div className="header">
        <p>Enter the following number to unlock</p>
            <p>{randomNumber}</p> 
            </div>
        
        <div className="body">

            <div className="code">
            <p>{count}</p>
            <button onClick={handleClick.bind(null,'count') }> CLICK </button>
            <button onClick={reset.bind(null,'count')}>Reset</button>

            <p> {count1} </p>
            <button onClick={handleClick.bind(null,'count1') }> CLICK </button>
            <button onClick={reset.bind(null,'count1')}>Reset</button>

            <p> {count2} </p>
            <button onClick={handleClick.bind(null,'count2') }> CLICK </button>
            <button onClick={reset.bind(null,'coun2t')}>Reset</button>

            <p> {count3} </p>
            <button onClick={handleClick.bind(null,'count3')}> CLICK </button>
            <button onClick={reset.bind(null,'count3')}>Reset</button>
            </div>
            <button onClick={()=> {if (count == firstNumber && count1==secondNumber && count2==thirdNumber &&count3==fourthNumber)
    {
        alert("Congrats! You get nothing... What else did you expect?");
    }else{
        alert("That's the wrong code moron");
    }
    }
    }>check</button>

        </div>
        <div className="footer"></div>
        </div>
    );

}

export default Lock;