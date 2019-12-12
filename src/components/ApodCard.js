import React from "react";


function ApodCard(props){
    
   
    
    if(!props.picdata) return <h3>Loading....</h3>
   
    return (
     <div className="card">
         <div className="title">
             <h2>{props.picdata.title}</h2>
             <h3>{props.picdata.date}</h3>
             <div className="img-container">
                 <img src={props.picdata.url} alt={props.picdata.title}/>  
             </div>
        </div>
         
     </div>
    )
}

export default ApodCard;
