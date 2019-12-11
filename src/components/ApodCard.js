import React from "react";


function ApodCard(props){
    console.log(props.picdata)
    if(!props.picdata) return <h3>Loading....</h3>
   
    return (
     <div className="card">
         <div className="title">
             <h2>{props.picdata.title}</h2>
             <div className="img-container">
                 <img src={props.picdata.url} alt={props.picdata.title}/>  
             </div>
        </div>
         
     </div>
    )
}

export default ApodCard;
