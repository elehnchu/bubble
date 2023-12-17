import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import './YourProfile.css';
import DefaultProfile from '../assets/profile-photos/default.png'
import BackButtonImage from '../images/arrow.png'
import Back_arrow from "../images/Backward arrow.png"
import GearImage from '../images/setting.png'
import PencilImage from '../images/edit.png'
import { useNavigate } from 'react-router-dom';

const YourProfile = () => {
  const { state, dispatch } = useUser();
  const { user } = state;
  const navigate = useNavigate();

  const handleClickSettings = () => {
    navigate('/settings')
  }
  const handleBackClick = () => {
      navigate('/nobubblefound')
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
      <img src={PencilImage} alt="Pencil" className="pencil" />
      <h1 className="user-text">{user ? user.name : "You"}</h1>
      <p className="email-text">{user ? user.email : "abc123@email.com"}</p>
      <div className="detail-content">
        {user ? (user.tags.map((tag) => {
          return <div className="tag">{tag}</div>
          }
        )) : []}
      </div>
      <div className="details">
        <div className="detail-title">Major / Minor:</div>
        <div className="detail-content">
          <div className="tag">{user ? user.major : ""}</div>
          <div className="tag">{user ? user.minor : ""}</div>
        </div>
        <div className="detail-title">About Me:</div>
        <p className="about-me-text">{user ? user.bio : ""}</p>
      </div>
    </div>
    </>
  );
};

export default YourProfile;
