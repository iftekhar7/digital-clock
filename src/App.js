 import './App.css'
import { useState } from "react";

export default function App() {
let time=new Date().toLocaleTimeString();

const [ctime,setTime]=useState(time);
 
const updateTime=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
};
setInterval(updateTime,1000);

return (
   
  <div className="App">
     <div className="box">
    <h1>Digital Clock</h1>
    
    <hr/>
    <div className='time'>
     <h2> Time:{ctime}</h2>
     </div>
     </div>
  </div>
   
);
}
