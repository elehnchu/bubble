import './Courses.css';
import { useNavigate } from 'react-router-dom';
import fishImg from "../images/fish_nobubbles.png"
import React from "react";
import fishsmall from "../images/fish_small.png"
import bubble_blue from "../images/bubble_blue.png"
import bubble_purple from "../images/Bubble_purple.png"
import bubble_green from "../images/Bubble_green.png"
import bubble_beige from "../images/Bubble_beige.png"
import Back_arrow from "../images/Backward arrow.png"
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'


function Courses(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/nobubblefound')
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
        <div className="Courses_Header">
                <div className ="Header-courses">
                    <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                    </div>
                    <div className ="Header-courses-title">
                        Courses
                    </div>
                </div>

            <img className="fish-pic1" src={fishsmall}></img>
            <div className ="Course-container">
            <div className = "List-courses">
                <ListItem  index={1} background_bubble= {bubble_blue} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={2} background_bubble= {bubble_purple} courseName="COMS 4170" courseTitle="UI Design"></ListItem>
                <ListItem  index={3} background_bubble= {bubble_green} courseName="APMA 3101" courseTitle="Applied Math I: Linear Algebrea"></ListItem>
                <ListItem  index={4} background_bubble= {bubble_beige} courseName="STAT 2102" courseTitle="Applied Statistical Computing"></ListItem>
        
            </div>
            </div>
            <div className = "fish-container">
                <img className="fish-pic2" src={fishsmall}></img>
                <img className="fish-pic3" src={fishsmall}></img>
                <img className="fish-pic4" src={fishImg}></img>
            </div>
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
            
        </div>
    );
}

export default Courses;

function ListItem({ background_bubble, courseName, courseTitle}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/groupsearch')
    }
    return (
      <div style={{ backgroundImage:`url(${background_bubble})` }} className="list-item-courses" onClick={handleClick}>
          <div className="list-item-courses-name">
            {courseName}
            
            <div className="list-item-course-title">{courseTitle}</div>
          </div>
          </div>
    );
  }