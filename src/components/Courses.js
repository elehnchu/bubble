import './Courses.css';
import fishImg from "../images/fish.png"
import React from "react";

function Courses(){
    return (
        <div className="Courses_Header">
            <div className ="Header">
                Courses
            </div>
            <img className="fish-pic1" src={fishImg}></img>

            <div className = "List">
                <ListItem  index={1} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={2} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={3} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={4} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
            </div>
            <div className = "fish-container">
                <img className="fish-pic2" src={fishImg}></img>
                <img className="fish-pic3" src={fishImg}></img>
                <img className="fish-pic4" src={fishImg}></img>
            </div>
            
        </div>
    );
}

export default Courses;

function ListItem({ index, courseName, courseTitle}) {
    return (
      <div className="list-item">
          <div className="list-item-group-name">
            {courseName}
            <div className="list-item-members">{courseTitle}</div>
          </div>
      </div>
    );
  }