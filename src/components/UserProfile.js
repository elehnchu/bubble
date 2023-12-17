// UserProfile.js
import React from 'react';
import './UserProfile.css';
import './Star.css';
import Star from '../images/star.jpg'
import DefaultProfile from '../assets/profile-photos/default.png'
import { useNavigate } from 'react-router-dom';
import Back_arrow from "../images/Backward arrow.png"
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

//el: not sure if this would back to /memberlist, it's not developed atm, so 
//temp nav is login

const UserProfile = () => {

  const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/')
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
    <>
    <div className="Header_user_info">
      <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
        </div>
        </div>
    <div className="user-profile">
        <img src={DefaultProfile} alt='' className="profile-photo" />
        <img src={Star} alt='' />
      <h1 className="user-text">User</h1>
      <p className="email-text">user1@columbia.edu</p>
      <div className="detail-content">
        <div className="tag">night owl</div>
        <div className="tag">group learner</div>
        <div className="tag">coffee lover</div>
        <div className="tag">multitasker</div>
        <div className="tag">critical thinker</div>
      </div>
      <div className="details">
        <div className="detail-title">Major / Minor:</div>
        <div className="detail-content">
          <div className="tag">Computer Science</div>
          <div className="tag">Math</div>
        </div>
        <div className="detail-title">About Me:</div>
        <p className="about-me-text">Lorem ipsum text</p>
      </div>
    </div>
    <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
    </>
  );
};

export default UserProfile;
