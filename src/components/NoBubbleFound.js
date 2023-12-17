import React from "react";
import { useNavigate } from 'react-router-dom';
import './NoBubbleFound.css';
import fish from '../images/fish.png';

function NoBubbleFound () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/courses');
    }
    return (
        <div>
            <div className="Header">
                    <div className ="Header-nobubble-title">
                        Bubbles
                    </div>
            </div>
            <div className = "bubble-container">
            <div className="title1">No Bubbles Found...</div>
            <img className="fish-pic" src={fish} alt="fish"></img>
            <button className="request-button" onClick={handleClick}>LOOK FOR A BUBBLE</button>
            </div>
        </div>
    );
}

export default NoBubbleFound;