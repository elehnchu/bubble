import React from "react";
import { useNavigate } from 'react-router-dom';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'
import './NoBubbleFound.css';
import fish from '../images/fish.png';

function NoBubbleFound () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/courses');
    }

    const handleChatClick = () => {
        navigate('/channellist') // fix later
      }
    
      const handleClassesClick = () => {
        navigate('/courses') // fix later
      }
    
      const handleProfileClick = () => {
        navigate('/yourprofile')
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
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
        </div>
    );
}

export default NoBubbleFound;