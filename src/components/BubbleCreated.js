import React from "react";
import './BubbleCreated.css';
import bubbleCreated from '../images/bubble-created.jpg';

function BubbleCreated () {
    return (
        <div>
            <div className="Header">Bubbles</div>
            <img className="bubble-created-pic" src={bubbleCreated}></img>
            <button className="request-button">INVITE USERS</button>
        </div>
    );
}

export default BubbleCreated;