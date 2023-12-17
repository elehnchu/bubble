import './CreateGroup.css';
import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Back_arrow from "../images/Backward arrow.png"
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

function CreateGroup(){

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        maxNoMembers: 1,
        meetFreq: 1,
        purpose: '',
        modality: '',
        bio: ''
    });
    const handleChatClick = () => {
        navigate('/channellist') // fix later
      }
    
      const handleClassesClick = () => {
        navigate('/courses') // fix later
      }
    
      const handleProfileClick = () => {
        navigate('/yourprofile')
      }

    const handleCreate = () => {
        fetch('http://127.0.0.1:5000/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
        .then(response => response.json())
        .then(data => console.log('Group created:', data))
        .catch(error => console.error('Error creating group:', error))
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleNavigate = () => {
        navigate('/bubblecreated')
    }
    const handleBackClick = () => {
        navigate('/groupsearch')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreate();
        handleNavigate();
    }
    return (
        <div>
            <div className="Header">
            <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow" onClick={handleBackClick}>
                    </div>
                    <div className ="Header-create-title">
                        Create Bubble
                    </div>
            </div>
            <div className="form_create_bubble">
                <form onSubmit={ handleSubmit }>
                    <label id="first-label" className="label" for="name">Group Name</label><br></br>
                    <input className="form-input" type="text" id="name" name="name" value={inputs.name} onChange={handleChange}></input>
                    <br></br>
                    <label className="label" for="maxNoMembers">Members</label><br></br>
                    <select className="form-select1" name="maxNoMembers" id="maxNoMembers" value={inputs.maxNoMembers} onChange={handleChange}>
                        {[1, 2, 3, 4].map((number) => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select><br></br>
                    <label className="label" for="meetFreq">Meet how often? (per/wk)</label><br></br>
                    <select className="form-select1" name="meetFreq" id="freq" value={inputs.meetFreq} onChange={handleChange}>
                        {[1, 2, 3].map((number) => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select><br></br>
                    <label className="label" for="purpose">Primary purpose?</label><br></br>
                    <select className="form-select2" name="purpose" id="purpose" value={inputs.purpose} onChange={handleChange}>
                        {["Project Collaboration", "Homework Help", "General Studying"].map((modality) => (
                            <option key={modality} value={modality}>{modality}</option>
                        ))}
                    </select><br></br>
                    <label className="label" for="modality">Modality?</label><br></br>
                    <select className="form-select2" name="modality" id="modality" value={inputs.modality} onChange={handleChange}>
                        {["Virtual", "In-person", "Hybrid"].map((modality) => (
                            <option key={modality} value={modality}>{modality}</option>
                        ))}
                    </select><br></br>
                    <label className="label" for="bio">Optional Bio</label><br></br>
                    <textarea className="bio-input" id="bio" name="bio" rows="3" cols="36" value={inputs.bio} onChange={handleChange}></textarea><br></br>
                    <input className="form-submit" type="submit" value="CREATE"></input>
                </form>
            </div>
            <div className="Footer">
                <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
                <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
                <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
            </div>
        </div>
    );
}

export default CreateGroup;