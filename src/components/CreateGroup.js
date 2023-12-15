import './CreateGroup.css';
import React from "react";
import { useState } from 'react';

function CreateGroup(){
    const [inputs, setInputs] = useState({
        gname: '',
        members: 1,
        freq: 1,
        purpose: '',
        modality: '',
        bio: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', inputs)
    }
    return (
        <div>
            <div class="Header">Create Bubble</div>
            <div class="form">
                <form onSubmit={handleSubmit}>
                    <label id="first-label" class="label" for="gname">Group Name</label><br></br>
                    <input class="form-input" type="text" id="gname" name="gname" value={inputs.gname} onChange={handleChange}></input>
                    <br></br>
                    <label class="label" for="members">Members</label><br></br>
                    <select class="form-select1" name="members" id="members" value={inputs.members} onChange={handleChange}>
                        {[1, 2, 3, 4].map((number) => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select><br></br>
                    <label class="label" for="freq">Meet how often? (per/wk)</label><br></br>
                    <select class="form-select1" name="freq" id="freq" value={inputs.freq} onChange={handleChange}>
                        {[1, 2, 3].map((number) => (
                            <option key={number} value={number}>{number}</option>
                        ))}
                    </select><br></br>
                    <label class="label" for="purpose">Primary purpose?</label><br></br>
                    <select class="form-select2" name="purpose" id="purpose" value={inputs.purpose} onChange={handleChange}>
                        {["Project Collaboration", "Homework Help", "General Studying"].map((modality) => (
                            <option key={modality} value={modality}>{modality}</option>
                        ))}
                    </select><br></br>
                    <label class="label" for="modality">Modality?</label><br></br>
                    <select class="form-select2" name="modality" id="modality" value={inputs.modality} onChange={handleChange}>
                        {["Virtual", "In-person", "Hybrid"].map((modality) => (
                            <option key={modality} value={modality}>{modality}</option>
                        ))}
                    </select><br></br>
                    <label class="label" for="bio">Optional Bio</label><br></br>
                    <textarea class="bio-input" id="bio" name="bio" rows="3" cols="36" value={inputs.bio} onChange={handleChange}></textarea><br></br>
                    <input class="form-submit" type="submit" value="CREATE"></input>
                </form>
            </div>
        </div>
    );
}

export default CreateGroup;