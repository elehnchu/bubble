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
            <div className="Header">Bubbles</div>
            <div className="title1">No Bubbles Found...</div>
            <img className="fish-pic" src={fish} alt="fish"></img>
            <button className="request-button" onClick={handleClick}>LOOK FOR A BUBBLE</button>
        </div>
    );
}

export default NoBubbleFound;