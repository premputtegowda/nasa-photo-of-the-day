import React, { useState, useEffect} from "react";
import axios from "axios";
import ApodCard from "./ApodCard";


function ApodData(){
    const [picdata, setPicdata] = useState();
   /*  const didUpdate = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then( response => {
            console.log(response.data)
            setPicdata(response.data);
        })
        .catch(error => {
            console.log("Error returned: ", error)
        })
           useEffect(didUpdate,[])
    } */
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=Q3or0wVg2RBdbhBuajOni7g7X5sKmGjV3XGoPcqp")
        .then(response => {
            
            setPicdata(response.data)
            
        })
        .catch(error => {
            console.log(error);
        })
    },[])
 
    return (
        <ApodCard picdata = {picdata}/>
    )
}

export default ApodData;
