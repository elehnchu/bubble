import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usersData from '../json/users.json';
import BackArrowImage from '../images/Backward arrow.png';
import './MembersList.css';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

const MemberList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const memberIDs = location.state ? Object.keys(location.state.members_dict) : [];
  const [membersInfo, setMembersInfo] = useState([]);

  useEffect(() => {
    const matchedMembers = usersData.filter(user => memberIDs.includes(String(user.id)));
    setMembersInfo(matchedMembers);
  }, [memberIDs]);

  const handleBackClick = () => {
    navigate(-1);
  };

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
        <img src={BackArrowImage} alt="Back" className="Back-arrow" onClick={handleBackClick} />
        {/* Rest of the header content */}
      </div>
      <div className="member-list-container">
        {membersInfo.map(member => (
          <div key={member.id} className="member-item">
            <img src={member.profilePicUrl} alt={member.name} className="member-image" />
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-status">{member.email}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="Footer">
        <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
        <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
        <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
      </div>
    </>
  );
};

export default MemberList;
