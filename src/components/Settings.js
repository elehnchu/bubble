import './Settings.css';
import React from "react";
import LPI from "../images/Liked Profiles Icon.png"
import ICI from "../images/Import Courses Icon.png"
import NI from "../images/Notifications Icon.png"
import AUI from "../images/About Us Icon.png"
import PPI from "../images/Privacy PPolicy Icon.png"
import HI from "../images/Help Icon.png"
import Back_arrow from "../images/Backward arrow.png"
import Right_arrow from "../images/right_arrow.png"

function Settings(){
    return (
        <div className="settings_Header">
            <div className ="Header-settings">
                    <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow">
                    </div>
                    <div className ="Header-settings-title">
                        Settings
                    </div>
                </div>
            <div className ="Settings-container">
                <div className = "General-title">
                    General
                </div>
            <div className = "List-general">
                <ListItem  index={1} icon_image={LPI} Title="Liked Profiles"></ListItem>
                <ListItem  index={2} icon_image={ICI} Title="Import Courses"></ListItem>
                <ListItem  index={3} icon_image={NI} Title="Notifications"></ListItem>

            </div>
                <div className = "Info-title">
                    Info and Support
                </div>
            <div className = "List-info">
                <ListItem  index={1} icon_image={AUI} Title="About Us"></ListItem>
                <ListItem  index={2} icon_image={PPI} Title="Privacy Policy"></ListItem>
                <ListItem  index={3} icon_image={HI} Title="Help"></ListItem>
            </div>
            </div>
            
        </div>
    );
}

export default Settings;

function ListItem({icon_image, Title}) {
    return (
      <div className="list-item-settings">
            <div style={{ backgroundImage:`url(${icon_image})` }}className = "icon-image">
                    </div>
            <div className="list-item-settings-name">
                {Title}
            </div>
            <div className ="right-arrow">
            </div>
          </div>
    );
  }