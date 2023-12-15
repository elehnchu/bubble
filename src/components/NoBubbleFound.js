import React from "react";
import './NoBubbleFound.css';
import fish from '../images/fish.png';

function NoBubbleFound () {
    return (
        <div>
            <div className="Header">Bubbles</div>
            <div className="title1">No Bubbles Found...</div>
            <img className="fish-pic" src={fish} alt="fish"></img>
            <button className="request-button">LOOK FOR A BUBBLE</button>
        </div>
    );
}

export default NoBubbleFound;