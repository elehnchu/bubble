import './Courses.css';
import fishImg from "../images/fish_nobubbles.png"
import React from "react";
import fishsmall from "../images/fish_small.png"
import bubble_blue from "../images/bubble_blue.png"
import bubble_purple from "../images/Bubble_purple.png"
import bubble_green from "../images/Bubble_green.png"
import bubble_beige from "../images/Bubble_beige.png"
import Back_arrow from "../images/Backward arrow.png"


function Courses(){
    return (
        <div className="Courses_Header">
                <div className ="Header-courses">
                    <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow">
                    </div>
                    <div className ="Header-courses-title">
                        Courses
                    </div>
                </div>

            <img className="fish-pic1" src={fishsmall}></img>
            <div className ="Course-container">
            <div className = "List-courses">
                <ListItem  index={1} background_bubble= {bubble_blue} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
                <ListItem  index={2} background_bubble= {bubble_purple} courseName="COMS 4170" courseTitle="UI Design"></ListItem>
                <ListItem  index={3} background_bubble= {bubble_green} courseName="APMA 3101" courseTitle="Applied Math I: Linear Algebrea"></ListItem>
                <ListItem  index={4} background_bubble= {bubble_beige} courseName="STAT 2102" courseTitle="Applied Statistical Computing"></ListItem>
                <ListItem  index={5} background_bubble= {bubble_blue} courseName="COMS 4111" courseTitle="Introduction to Databases"></ListItem>
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

function ListItem({ background_bubble, courseName, courseTitle}) {
    return (
      <div style={{ backgroundImage:`url(${background_bubble})` }} className="list-item-courses">
          <div className="list-item-courses-name">
            {courseName}
            
            <div className="list-item-course-title">{courseTitle}</div>
          </div>
          </div>
    );
  }