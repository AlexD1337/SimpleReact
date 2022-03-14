import React from "react";
import {useState} from 'react';

function Clicker(){
    const [count,newCount] = useState(0);

    return(
        <div className="wrapper">
        <div className="header"> </div>
        <div className="body">
            <p>You clicked {count} times </p>
            <button onClick={()=> newCount(count+1)}> CLICK </button>
        </div>
        <div className="footer"></div>
        </div>
    );

}

export default Clicker;