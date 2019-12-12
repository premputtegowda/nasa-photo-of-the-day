import React from "react";


function Buttons(props) {
    const previousDate = props.previousDate;
    const nextDate = props.nextDate;
    const counter = props.counter;
    let button;
    console.log(counter);
    if (counter > 1) {
        button = <button onClick = {() => nextDate()}>Next</button>
    }
    return (
        <div className="btn-container">
            <p>counter: {counter}</p>
            <button onClick={()=> previousDate()}>Previous</button>
            {button}
         
       
        </div>  
    )
}


export default Buttons;
