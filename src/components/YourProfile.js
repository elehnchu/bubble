import React from 'react';
import './YourProfile.css';
import DefaultProfile from '../assets/profile-photos/default.png'
import BackButtonImage from '../images/arrow.png'
import GearImage from '../images/setting.png'
import PencilImage from '../images/edit.png'

const YourProfile = () => {
  return (
    <>
    <div className="Header">
        <div className="back">
            <button className="back-button">
                <img className = "back-arrow" src={BackButtonImage} alt="back arrow"></img>
            </button>
        </div>
        Profile
        <div className="gear">
            <button className="gear-button">
                <img className = "gear-img" src={GearImage} alt="gear"></img>
            </button>
        </div>
    </div>
    <div className="your-profile">
      <img src={DefaultProfile} alt='' className="profile-photo" />
      <img src={PencilImage} alt="Pencil" className="pencil" />
      <h1 className="user-text">You</h1>
      <p className="email-text">abc123@columbia.edu</p>
      <div className="detail-content">
        <div className="tag">night owl</div>
        <div className="tag">group learner</div>
        <div className="tag">coffee lover</div>
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
    </>
  );
};

export default YourProfile;
