import React, { useEffect,useState } from "react";



export default function CountDown(props){

//timer
let [counter,setCounter] = useState(3);

//fadeout
function fadeOut() {
    var element = document.querySelector(".count-down");
    element.style.opacity = 0;
    }
    

useEffect(()=>{
if(counter >= 1){
    setTimeout(()=>{
        setCounter((pre) => --pre); //increament the counter
     },1000);
}
else{
    setCounter(pre => pre = "Ready !!");
    
     setTimeout(()=>{
        fadeOut();
     },1000);
  
    setTimeout(()=>{
      document.querySelector(".count-down-cover").style.visibility = "hidden";
    },1300);
    
}
},[counter]);


    return (<>
    
    <div className="count-down-cover">
        <p className=" fs-4 count-down">{counter}</p>
    </div>

    
    </>)
}