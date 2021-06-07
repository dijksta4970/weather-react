import React, { useState } from "react";

export default function Unichage(props){
    const [unit,setUnit] = useState("celsius");
    
    function convertoF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertoC(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function calculate(){
        return (
            (props.celsius * 9)/5 + 32
        );
    }

    if(unit === "celsius") {
        return(
            <div className="temprature">
                {Math.round(props.celsius)}
                <span>C° | <a href="/" onClick={converttoC}>
                    F° </a>  </span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9)/5 + 32;
        return(
            <div className="temprature">
                {Math.round(calculate())}
                <span><a href="/" onClick={converttoC}>C°</a> | 
                    F°   </span>
            </div>
        );

    }
    
}