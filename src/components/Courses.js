import './Courses.css';
import fishImg from "../images/fish_nobubbles.png"
import React from "react";
import fishsmall from "../images/fish_small.png"

function Courses(){
    return (
        <div className="Courses_Header">
            <div className ="Header-courses">
                Courses
            </div>
            <img className="fish-pic1" src={fishsmall}></img>
            <div className ="Course-container">
            <div className = "List-courses">
                <ListItem  index={1} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={2} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={3} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={4} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={5} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
            </div>
            </div>
            <div className = "fish-container">
                <img className="fish-pic2" src={fishsmall}></img>
                <img className="fish-pic3" src={fishsmall}></img>
                <img className="fish-pic4" src={fishImg}></img>
            </div>
            
        </div>
    );
}

export default Courses;

function ListItem({ index, courseName, courseTitle}) {
    return (
      <div className="list-item-courses">
          <div className="list-item-courses-name">
            {courseName}
            
            <div className="list-item-course-title">{courseTitle}</div>
          </div>
          </div>
    );
  }