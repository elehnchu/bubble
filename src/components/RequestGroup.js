import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import back from "../images/arrow.png";
import Back_arrow from "../images/Backward arrow.png";
import groupImg from "../images/group.jpeg";
import userImg from "../images/user.jpeg";
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'
import './RequestGroup.css';

function RequestGroups({}) {
    const { groupId } = useParams();
    const [group, setGroup] = useState(null);
    const [users, setUsers] = useState([])



    useEffect(() => {
        fetch(`http://127.0.0.1:5000/groups/${groupId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Study group not found');
            }
            return response.json();
        })
        .then(data => setGroup(data))
        .catch(error => console.error('Error fetching study group:', error));

        const fetchUsers = async () => {
            try {
                const promises = group?.users.map(async (id) => {
                    const response = await fetch(`http://127.0.0.1:5000/users/${id}`);
                    const user = await response.json();
                    return user;
                });

                const userList = await Promise.all(promises);
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [groupId, group?.users])

    const tags = group ? (group.tags ? group.tags : []) : [];
    const groupDescription = group ? group.bio : '';
    const groupName = group ? group.name : '';
    return (
        <RequestGroup groupPic={groupImg} groupName={groupName} userData={users} tags={tags} groupDescription={groupDescription}></RequestGroup>
    );
};
 
export default RequestGroups;

function RequestGroup ({groupPic, groupName, userData, tags, groupDescription}) {
    const navigate = useNavigate();

  const handleBackClick = () => {
      navigate('/groupsearch')
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

    const handleRequestClick = () => {
        navigate('/nobubblefound')
    }
    return (
        <div>
            <div className="Header">
                <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                </div>
            </div>
            <div className="Content">
                <img className="group-pic" src={groupPic} alt="group profile"></img>
                <div className="group-name">{groupName}</div>
                <div className="group-members">
                    {userData.map((user) => (
                        <div className="group-users">
                            <img className="profile-pic" src={userImg} alt="profile"></img><div className="user-name">{user.name}</div>
                        </div>
                    ))}
                </div>
                <div className="group-tags">
                    {tags.map((tag) => {
                    return <span className="tags">{tag}</span>
                    })}
                </div>
                <div className="group-description">
                    <div className="description-entry">{groupDescription}</div>
                </div>
                <div>
                    <button className="request-button" onClick={handleRequestClick}>REQUEST TO JOIN</button>
                </div>
            </div>
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
        </div>
    );
}