import React from "react";
import {useState} from 'react';

function Clicker(){
    const [test,alex] = useState(0);

    return(

        <div className="body">
            <p>You clicked {test} times </p>
            <button onClick={()=> alex(test+1)}> CLICK </button>
        </div>
    );

}

export default Clicker;