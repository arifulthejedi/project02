//open the popup
import React, { useState,useEffect, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import { closeModal, reSet } from "./states/reducer";
import { useDispatch } from "react-redux";

//resource importing
import batman from "./../media/png/batman.gif";
import human from "./../media/png/human.gif";
import turtle from "./../media/png/turtle.gif";
import superman from "./../media/png/superman.gif";
import flash from "./../media/png/flash.gif";
import superhuman from "./../media/png/superhuman.gif";
import quicksilver from "./../media/png/quicksilver.gif";
import thunder from "./../media/png/thunder.gif";
import spiderman from "./../media/png/spiderman.gif";
import uncleGrandPa from "./../media/png/uncle-grandpa.gif";



//set score
function setScore(scoreObjs,name){

    let scores =  localStorage.getItem(name);
    if(!scores){
       localStorage.setItem(name,JSON.stringify([]));
    }   
    scores = JSON.parse(localStorage.getItem(name));

    scores.unshift(scoreObjs); //inserted the score

    let sortedList = scores.sort((a,b) => a.score - b.score) //sort in asecending order

    if(sortedList.length > 5){
        sortedList.pop();
    }

    localStorage.setItem(name,JSON.stringify(scores));
  }



//get score
function getScores(name){
    let obj = JSON.parse(localStorage.getItem(name));
    if(obj){
        return obj;
    }
    return;
}





export default function Popup(props) {


    let { openModal, responseTime } = useSelector(state => state.card);
    let action = useDispatch();
    let [playerName, setName] = useState("");
    
    let scores = useRef("");
    let lastScore = useRef("");

    useEffect(()=>{
        let getScore = getScores("how-fast-u-are");
        if(getScore){
            scores.current = getScore;
            lastScore.current = getScore[scores.current.length - 1].score;
        }

    },[openModal])

    let onClose = () => {
        action(reSet());
        setName("");
        action(closeModal);
        scores = "";
        lastScore = "";
    }
   

    //submit score
    let submitScore = function () {
        let score = { name: playerName, score: responseTime };
        setScore(score, "how-fast-u-are");
        action(reSet());
        setName("");
        action(closeModal);
    }

    //imput 
    let onChangeHandle = function (e) {
        setName(e.target.value);
    }

    //avater
    let avater = function (resTime) {
        let data = {};

        switch (true) {
            case resTime >= 1000:
                data = {
                    name: "Turtle",
                    img: turtle
                }
                break;

            case resTime >= 700:
                data = {
                    name: "Uncle Grandpa",
                    img: uncleGrandPa
                }
                break;


            case resTime >= 650:
                data = {
                    name: "Human",
                    img: human
                }
                break;

            case resTime >= 500:
                data = {
                    name: "BatMan",
                    img: batman
                }
                break;


            case resTime >= 400:
                data = {
                    name: "Spider-Man",
                    img: spiderman
                }
                break;



            case resTime >= 350:
                data = {
                    name: "Quick-Silver",
                    img: quicksilver
                }
                break;




            case resTime >= 300:
                data = {
                    name: "Superman",
                    img: superman
                }
                break;



            case resTime >= 200:
                data = {
                    name: "Flash",
                    img: flash
                }
                break;



            case resTime >= 150:
                data = {
                    name: "Thunder-Bold",
                    img: thunder
                }
                break;



            case resTime > 0: {
                data = {
                    name: "Super Human",
                    img: superhuman
                }
                break;
            }

            default:
                data = {
                    name: null,
                    img: null,
                }
                console.log("Response not found");
                break;
        }

        return data;
    }

    //input
    let inputScore = (
        <>
            <div className="input">
                <div className="mt-3">
                    <label className="form-label fs-6"><span>Submit Your Score</span></label>
                    <input value={playerName} className="form-control" placeholder="Your Name" onChange={onChangeHandle} />
                </div>
                <div>
                    <center className="m-2">
                        <button disabled={playerName ? false : true} onClick={submitScore} id="popup-btn" className="btn btn-sm m-2">⚡Submit⚡</button>
                    </center>
                </div>
            </div>

        </>
    )


    return (<>

        <Modal
            show={openModal}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body id="modal-body">
                <div id="grid">
                    <div id="section1">
                        <div>
                            <img style={{ height: "200px", width: "200px", borderRadius: "3px" }}
                                src={avater(responseTime).img}
                                alt="superhuman" />
                            <center>
                                <p className="fs-5">!! {avater(responseTime).name} !!</p>
                            </center>
                        </div>
                    </div>
                    <div id="section2">
                        <center className="mb-4">
                            <div className="fs-4">
                                <div>Your Response : <p style={{ color: "red" }}>{responseTime}ms</p>
                                </div>
                            </div>
                        </center>
                      {scores.current.length < 5 ? inputScore :  (responseTime < lastScore.current ? inputScore : false) }
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    </>)
}