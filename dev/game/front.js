import React from "react";
import {getStart } from "./states/reducer";
import { useDispatch, useSelector } from "react-redux";


export default function Card(props){

let {start} = useSelector(state => state.card);
let action = useDispatch();

console.log("front is called");

return(<>
    
    {start && <div className="card mt-2">
        <div className="overlay">
            <div className="card-container">
              <div>
                <div><p className="fs-4"> Measure How fast You are !</p></div>
                <div className="fs-1  card-heading">Are You Ready ?</div>
                <button onClick={() => action(getStart())} className="btn m-2 text-white card-btn">Let's Go</button>  
              </div>
            </div> 
          </div> 
    </div>}    
</>)
}