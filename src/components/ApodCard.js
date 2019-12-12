import React from "react";


function ApodCard(props){
    
   
    
    if(!props.picdata) return <h3>Loading....</h3>
   
    return (
     
         <img src={props.picdata.url} alt={props.picdata.title}/>  
    )

            
    
}

export default ApodCard;
