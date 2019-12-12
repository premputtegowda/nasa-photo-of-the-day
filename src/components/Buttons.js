import React from "react";
import styled from "styled-components";

const Button = styled.button`
background-color:#0BB5FF;
color: white;
font-size: 1rem;
margin: 1rem;
padding: 0.25rem 1rem;
border: 2px solid palevioletblue;
broder-radius:3px;


`;


function Buttons(props) {
    const previousDate = props.previousDate;
    const nextDate = props.nextDate;
    const counter = props.counter;
    let button;
  
    if (counter > 1) {
        button = <Button onClick = {() => nextDate()}>Next</Button>
    }
    return (
        <div className="btn-container">
            <p>counter: {counter}</p>
            <Button onClick={()=> previousDate()}>Previous</Button>
            {button}
         
       
        </div>  
    )
}


export default Buttons;
