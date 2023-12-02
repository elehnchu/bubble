import React from "react";
import back from "../images/arrow.png";
import groupImg from "../images/group.jpeg"
import userImg from "../images/user.jpeg"
import './RequestGroup.css'

function RequestGroups() {
    const userData = [
        {
            name:"User 1", 
            image:userImg,
        }, 
        {
            name:"User 2", 
            image:userImg,
        }];

    const tags = ["night owl", "group learner", "coffee lover"];
    const groupDescription = 
        `- Meet every Wednesday at 9pm 
         - Virtual ONLY
         - Seeking 1 more member`
    return (
        <RequestGroup groupPic={groupImg} groupName="Group 1" userData={userData} tags={tags} groupDescription={groupDescription}></RequestGroup>
    );
};
 
export default RequestGroups;

function RequestGroup ({groupPic, groupName, userData, tags, groupDescription}) {
    return (
        <div>
            <div className="group-header">
                <div className="back">
                    <button className="back-button">
                        <img className = "back-arrow" src={back} alt="back arrow"></img>
                    </button>
                </div>
            </div>
            <div className="Content">
                <img className="group-pic" src={groupPic} alt="group profile"></img>
                <div className="group-name">{groupName}</div>
                <div className="group-members">
                    {userData.map((user) => (
                        <div className="group-users">
                            <img className="profile-pic" src={user.image} alt="profile"></img><div className="user-name">{user.name}</div>
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
                    <button className="request-button">REQUEST TO JOIN</button>
                </div>
            </div>
        </div>
    );
}