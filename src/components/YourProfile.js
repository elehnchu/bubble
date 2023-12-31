import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import './YourProfile.css';
import DefaultProfile from '../assets/profile-photos/default.png'
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'
import BackButtonImage from '../images/arrow.png'
import Back_arrow from "../images/Backward arrow.png"
import GearImage from '../images/setting.png'
import PencilImage from '../images/edit.png'
import { useNavigate } from 'react-router-dom';

const YourProfile = () => {
  const { state } = useUser();
  const { user } = state;
  const navigate = useNavigate();

  const handleClickSettings = () => {
    navigate('/settings')
  }
  const handleBackClick = () => {
      navigate('/nobubblefound')
  }

  const handleEditClick = () => {
    navigate('/aboutme')
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
    <div className="Header">
        <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
        </div>
        <div className ="Header-settings-title">
          Profile
        </div>
        <div className="gear">
            <button className="gear-button" onClick={handleClickSettings}>
                <img className = "gear-img" src={GearImage} alt="gear"></img>
            </button>
        </div>
    </div>
    <div className="your-profile">
      <img src={DefaultProfile} alt='' className="profile-photo" />
      <img src={PencilImage} alt="Pencil" className="pencil" onClick={handleEditClick}/>
      <h1 className="user-text">{user ? user.name : "Jane Doe"}</h1>
      <p className="email-text">{user ? user.email : "test@email.com"}</p>
      <div className="detail-content">
        {user ? ( user.tags ? (user.tags.map((tag) => {
          return <div className="tag">{tag}</div>
          }
        )) : []) : []}
      </div>
      <div className="details">
        <div className="detail-title">Major / Minor:</div>
        <div className="detail-content">
          <div className="tag">{user ? user.major : "Statistics"}</div>
          <div className="tag">{user ? user.minor : "Economics"}</div>
        </div>
        <div className="detail-title">About Me:</div>
        <p className="about-me-text">{user ? user.bio : "Undergrad student in CC!"}</p>
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

export default YourProfile;
