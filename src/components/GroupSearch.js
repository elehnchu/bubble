import './GroupSearch.css';
import { useNavigate } from 'react-router-dom';
import lionImg from "../images/lion.jpg"
import Back_arrow from "../images/Backward arrow.png"
import React from "react";
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

function GroupSearch(){

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/courses')
    }

    const handleClick = () => {
      navigate('/creategroup')
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
        <div className="Bubble_Header">
            <div className ="Header_group_title">
                    <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                    </div>
                    <div className ="Header-groupsel-title">
                        COMS 4170
                    </div>
                </div>
            <form className= "Search-bar">
                <input class="form-input" type="text" id="name" placeholder="Search Group"></input>
            </form>
            <div className = "List">
                <ListItem  index={1} image={lionImg} groupName="Group 1" description= "90% match" memberNum= "Members:  2 of 3"></ListItem>
                <ListItem  index={2} image={lionImg} groupName="Group 2" description= "58% match" memberNum= "Members:  3 of 5"></ListItem>
                <ListItem  index={3} image={lionImg} groupName="Group 3" description= "25% match" memberNum= "Members:  5 of 8"></ListItem>
                <ListItem  index={4} image={lionImg} groupName="Group 4" description= "15% match" memberNum= "Members:  3 of 10"></ListItem>
               
            </div>
            <button class= "Add-button" onClick={handleClick}>
                +
            </button>
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>

        </div>
    );
}

export default GroupSearch;

function ListItem({ image, groupName, description, memberNum }) {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/requestgroup/1')
    }
    return (
      <div className = "list-item-container">
      <div className="list-item" onClick={handleClick}>
        <div className="list-item-icons">
          <img src={image} alt="Group Icon" className="profile-image" />
        </div>
        <div className="list-item-row">
          <div className="list-item-group-name">
            {groupName}
            <div className="list-item-members">{memberNum}</div>
          </div>
          <div className="list-item-description">{description}</div>
        </div>
      </div>
      </div>
    );
  }