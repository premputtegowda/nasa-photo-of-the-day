import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
background-color: black;
color:white;
padding: 0 10px;

`;



function Header(){
    return (
        <div><Heading1>Nasa Picture of the Day</Heading1></div>
    )
}

export default Header;