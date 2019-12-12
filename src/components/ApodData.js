import React, { useState, useEffect} from "react";
import axios from "axios";
import ApodCard from "./ApodCard";


function ApodData(props){
    const date = props.date;
    
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
 
    return (
        <ApodCard picdata = {picdata}/>
    )
}

export default ApodData;
