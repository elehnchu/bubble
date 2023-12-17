import React from "react";
import './BubbleCreated.css';
import bubbleCreated from '../images/bubble-created.jpg';
import { useNavigate } from 'react-router-dom';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'
import Back_arrow from "../images/Backward arrow.png"

function BubbleCreated () {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/courses')
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
            <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                    </div>
                    <div className ="Header-create-bubble-title">
                        Bubbles
                    </div>
            </div>
            <img className="bubble-created-pic" src={bubbleCreated}></img>
            <button className="request-button">INVITE USERS</button>
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
        </div>
    );
}

export default BubbleCreated;