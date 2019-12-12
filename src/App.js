import React, {useState}from "react";
import "./App.css";
import Header from "./components/Header";
import ApodData from "./components/ApodData";
import Buttons from "./components/Buttons";


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
  
  const newDate = currDate.setDate(currDate.getDate()- counter);
  
  
  
  setDate(formatDate(newDate));
  
  
}

function nextDate(){
  if (counter > 0) {
    setCounter(counter - 1);
  }
  const newDate = currDate.setDate(currDate.getDate()- counter);
  
  
  
  setDate(formatDate(newDate));
  
}


  
  return (
    <div className="App">

      <Header/>
      <Buttons  counter={counter} previousDate = {previousDate} nextDate = {nextDate} />
      <p> {date} </p>
      <ApodData date = {date}/>
     
    </div>
  );
}


export default App;
