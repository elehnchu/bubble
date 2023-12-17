import React from "react";
import './BubbleCreated.css';
import bubbleCreated from '../images/bubble-created.jpg';
import { useNavigate } from 'react-router-dom';
import Back_arrow from "../images/Backward arrow.png"

function BubbleCreated () {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/courses')
    }
    return (
        <div>
            <div className="Header">
            <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                    </div>
                    <div className ="Header-create-bubble-title">
                        Bubbles
                    </div>
            </div>
            <img className="bubble-created-pic" src={bubbleCreated}></img>
            <button className="request-button">INVITE USERS</button>
        </div>
    );
}

export default BubbleCreated;