// UserProfile.js
import React from 'react';
import './UserProfile.css';
import './Star.css';
import Star from '../images/star.jpg'
import DefaultProfile from '../assets/profile-photos/default.png'

const UserProfile = () => {
  return (
    <>
    <div className="Header"></div>
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
    </>
  );
};

export default UserProfile;
