import React, { useState, useEffect} from "react";
import axios from "axios";
import Buttons from "./Buttons";
import Header from "./Header";
//import ApodCard from "./ApodCard";
import styled from "styled-components";

const ImgContainer = styled.div`
    width: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ImgTag = styled.img`
    width:70%;
    border: 5px solid black;
    margin-bottom: 20%;
    margin-top: 10%;
`;

const Heading2= styled.h2`
background-color: black;
color:white;
padding: 0px 10px;
`;

const Heading3= styled.h3`
background-color: black;
color:white;
padding: 0px 10px;
`;

function ApodData(props){
    const date = props.date;
    const previousDate = props.previousDate;
    const nextDate = props.nextDate;
    const counter = props.counter;
    
   
    const [picdata, setPicdata] = useState();
  
    useEffect(()=>{
        
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=Q3or0wVg2RBdbhBuajOni7g7X5sKmGjV3XGoPcqp&date=${date}`)
        .then(response => {
            
            setPicdata(response.data)
            
        })
        .catch(error => {
            console.log(error);
        })
    },[date])
 
    if(!picdata) return <h3>Loading....</h3>
   
    return (
     
         <ImgContainer image={picdata.url}>
             <Header />
             <Heading2>{picdata.title}</Heading2>
             <Heading3>{date}</Heading3>
             <Buttons counter={counter} previousDate = {previousDate} nextDate = {nextDate} />
             <ImgTag src={picdata.url} alt="Pic of the day"/>
         </ImgContainer>
    )
}

export default ApodData;
