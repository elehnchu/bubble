import './GroupSearch.css';
import React from "react";

function GroupSearch(){
    return (
        <div className="Bubble_Header">
            <div className ="Header">
                COMS 4170
            </div>
            <form className= "Search-bar">
                <input class="form-input" type="text" id="name" placeholder="Search Group"></input>
            </form>
            <div className = "List">
                <ListItem  index={1} icon="X" groupName="Group 1" description= "90% match" memberNum= "Members:  2 of 5"></ListItem>
                <ListItem  index={2} icon="X" groupName="Group 2" description= "58% match" memberNum= "Members:  2 of 5"></ListItem>
                <ListItem  index={3} icon="X" groupName="Group 3" description= "25% match" memberNum= "Members:  2 of 5"></ListItem>
                <ListItem  index={4} icon="X" groupName="Group 4" description= "15% match" memberNum= "Members:  2 of 5"></ListItem>
            </div>
            <button class= "Add-button">
                +
            </button>
            <div className ="Footer"></div>
        </div>
    );
}

export default GroupSearch;

function ListItem ({icon, groupName, description, memberNum}) {
    return (
        <div className = "list-item">
            <div className = "list-item-icons">{icon}</div>
            <div className = "list-item-row">
                <div className = "list-item-group-name">{groupName} 
                    <div className="list-item-members">{memberNum}</div>
                </div>
                <div className = "list-item-description">{description}</div>
            </div>
        </div>
    );
}