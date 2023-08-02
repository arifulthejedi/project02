import React from "react";
import { useEffect, useRef} from "react";
import { openModal, setScore, showField } from "./states/reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CountDown from "./overlay-countdown";



//random number
function getRandomNumber(length, prevNumber = 0) {
  let randomNumber = Math.round(Math.random() * (length));
  while (randomNumber === prevNumber) {
    randomNumber = Math.round(Math.random() * (length));
  }
  return randomNumber; //has to store this number as prevNumber
}





//clone
let clone = function (len, visibility) {
  let items = [];
  while (len > (items.length - 1)) {
    items.push(<div style={{ visibility: visibility }} key={items.length} className="child" id={"child" + items.length}></div>)
  }
  return items;
}







export default function Field(props) {

  let timerId = useRef("");
  let ResTime = useRef(0);
  let prevNumber = useRef(0);
  let { visibility, start } = useSelector(state => state.card);
  let action = useDispatch();
  let items = clone(39, visibility);






  //event capturing
  let clickme = function (e) {
    if (e.target.id === "child" + prevNumber.current) {
  
      StopTimer(timerId.current);

      //store the score
      action(setScore(ResTime.current));

      //dispatch the action 
      action(showField());
      
      //clear the response
      ResTime.current = null;

      //open the popup
      action(openModal());
    }

  }

  //timer
  function StartTimer() {
    timerId.current = setInterval(() => { //use ref to store the id
      ResTime.current = ResTime.current + 10;
    }, 10);
  }

  function StopTimer(Id) {
    clearInterval(Id);
  }


  useEffect(() => {
    if (!start) {

      let visibleItem = getRandomNumber(39, prevNumber.current);

      prevNumber.current = visibleItem; //setting previous number

     
      
      setTimeout(()=>{
        //visible a random selected item
       let item = document.querySelector(`#child${visibleItem}`);
       item.style.visibility = "visible";
      
      //start response counter
      StartTimer();
      },4300);

    }
  }, [start]);


  let component = <>
    <CountDown />
      <div id="grid-container" onClick={clickme}>
        {items}
    </div>
  </>

  return (!start ? component : <>{false}</>);
}  