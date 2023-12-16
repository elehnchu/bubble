import './Settings.css';
import React from "react";
import LPI from "../images/Liked Profiles Icon.png"
import ICI from "../images/Import Courses Icon.png"
import NI from "../images/Notifications Icon.png"
import AUI from "../images/About Us Icon.png"
import PPI from "../images/Privacy PPolicy Icon.png"
import HI from "../images/Help Icon.png"

function Settings(){
    return (
        <div className="settings_Header">
            <div className ="Header-settings">
                Settings
            </div>
            <div className ="Settings-container">
                <div className = "General-title">
                    General
                </div>
            <div className = "List-general">
                <ListItem  index={1} image={LPI} Title="Introduction to Databases"></ListItem>
                <ListItem  index={2} image={ICI} Title="Introduction to Databases"></ListItem>
                <ListItem  index={3} image={NI} Title="Introduction to Databases"></ListItem>

            </div>
                <div className = "Info-title">
                    Info and Support
                </div>
            <div className = "List-info">
                <ListItem  index={1} image={AUI} Title="Introduction to Databases"></ListItem>
                <ListItem  index={2} image={PPI} Title="Introduction to Databases"></ListItem>
                <ListItem  index={3} image={HI} Title="Introduction to Databases"></ListItem>
            </div>
            </div>
            
        </div>
    );
}

export default Settings;

function ListItem({image, Title}) {
    return (
      <div className="list-item-settings">
          <div className="list-item-settings-name">
            {Title}
          </div>
          </div>
    );
  }