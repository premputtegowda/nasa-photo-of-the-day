import React, {useState}from "react";
import "./App.css";

import ApodData from "./components/ApodData";

import styled from "styled-components";




function App() {
  function formatDate(date){
    let d = new Date(date), month= d.getMonth() + 1, day = d.getDate(),year = d.getFullYear();
    if (month < 10) { month = 0 + month}
    if (day < 10) { day = 0 + day}
    return `${year}-${month}-${day}`
  }
  const [counter, setCounter] = useState(0);
  let currDate = new Date();
  
  const [date,setDate]= useState(formatDate(currDate));
  
  

 console.log(date)


function previousDate(){
  setCounter(counter + 1);
  console.log("previousfn ", counter)
  const newDate = currDate.setDate(currDate.getDate()- counter);
  console.log("previousfn-newDate ", newDate)
  
  
  setDate(formatDate(newDate));
  console.log("previousfn-date ", date)
  
}

function nextDate(){
  if (counter > 0) {
    setCounter(counter - 1);

  }
  const newDate = currDate.setDate(currDate.getDate()- counter);
  console.log(newDate)
  
  
  
  setDate(formatDate(newDate));
  
}


  
  return (
    <div className="App">

      
      {/* <Buttons  counter={counter} previousDate = {previousDate} nextDate = {nextDate} /> */}
     
      <ApodData date = {date} counter={counter} previousDate = {previousDate} nextDate = {nextDate}/>
     
    </div>
  );
}


export default App;
