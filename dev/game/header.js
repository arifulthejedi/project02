//Header component
import React,{useState} from "react";
import ScoreBoard from "./score-popup";


export default function Header(props) {

let [open,setOpen] = useState(false);
// let [close,setClose] = useState(true);



let openModal = function(){
  setOpen(pre => true);
}

let closeModal = function(){
    setOpen(pre => false);
  }
    return (<>
        <header id="header">
            <div id="item-container">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-end me-4">
                        <div className="d-flex">
                            <button onClick={openModal}  id="champion" type="button" className="btn btn-outline-secondary m-2">
                                <i className="bi bi-trophy-fill"></i>
                            </button>
                        </div>
                        <div>
                            <div style={{ width: '80px' }}></div>
                        </div>
                    </form>
                </nav>
            </div>
            <ScoreBoard show={open} close={closeModal} />
        </header></>);

}