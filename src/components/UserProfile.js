import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usersData from '../json/users.json'; // Ensure this path is correct
import BackArrowImage from '../images/Backward arrow.png';
import chatImg from '../images/footer_chat.png';
import classesImg from '../images/footer_classes.png';
import profileImg from '../images/footer_profile.png';
import DefaultProfile from '../assets/profile-photos/default.png';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUserProfile] = useState(null);

  useEffect(() => {
    const memberId = location.state?.memberId;
    const userData = usersData.find(user => String(user.id) === String(memberId));
    setUserProfile(userData);
  }, [location.state]);

  // Handlers for navigation
  const handleBackClick = () => navigate(-1);
  const handleChatClick = () => navigate('/channellist');
  const handleClassesClick = () => navigate('/courses');
  const handleProfileClick = () => navigate('/yourprofile');

  if (!user) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return (
    <>
      <div className="Header_user_info">
        <img src={BackArrowImage} alt="Back" className="Back-arrow" onClick={handleBackClick} />
      </div>
      <div className="user-profile">
        <img src={user.profilePicUrl || DefaultProfile} alt={user.name} className="profile-photo" />
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
      <div className="Footer">
        <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
        <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
        <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
    </div>
    </>
  );
};

export default UserProfile;