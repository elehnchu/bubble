import './LikedProfiles.css';
import UserImg from "../images/user_icon.png"
import Back_arrow from "../images/Backward arrow.png"
import React from "react";

function LikedProfiles(){
    return (
        <div className="Bubble_Header">
            <div className ="Header_Profile_title">
                    <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow">
                    </div>
                    <div className ="Header-Profile-title">
                        Liked Profiles
                    </div>
                </div>
            <form className= "Search-bar">
                <input class="form-input" type="text" id="name" placeholder="Search User"></input>
            </form>
            <div className = "List">
                <ListItem  index={1} Uimage={UserImg} userName="User 1" description= "90% match" email= "user1@columbia.edu"></ListItem>
                <ListItem  index={2} Uimage={UserImg} userName="User 2" description= "70% match" email= "user2@columbia.edu"></ListItem>
                <ListItem  index={3} Uimage={UserImg} userName="User 3" description= "50% match" email= "user3@columbia.edu"></ListItem>
                <ListItem  index={4} Uimage={UserImg} userName="User 4" description= "32% match" email= "user4@columbia.edu"></ListItem>
            </div>

        </div>
    );
}

export default LikedProfiles;

function ListItem({ Uimage, userName, description, email }) {
    return (
        <div className="list-item-container">

        <div className="list-item-row"> 
            <div className = "icon-userimage"></div>
            <div className ="user-container">
                <div className="list-item-user-name">{userName}</div>
                <div className="list-item-email">{email}
                </div>
            </div>
            <div className ="list-item-description">{description}
            </div>
      </div>
    </div>
    );
  }