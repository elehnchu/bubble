import './AboutMe.css'
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import editImg from '../images/editImg.png'


function AboutMe () {
    const navigate = useNavigate();
    const { state } = useUser();
    const { user } = state;
    const [inputs, setInputs] = useState({
        major: '',
        minor: '',
        tags: '',
        bio: ''
    });

    useEffect(() => {
        if (!user) {

        }
    }, [user, navigate])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleUpload = async (inputs) => {
        try {
            const tagsArr = inputs.tags.split(',').map((tag) => tag.trim());
            const fields = {
                userId: user?.id || 2,
                major: inputs.major,
                minor: inputs.minor,
                bio: inputs.bio,
                tags: tagsArr
            }

            const response = await fetch('http://127.0.0.1:5000/update-user-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields),
            });

            if (!response.ok) {
                throw new Error('Failed to update user information');
            }

            console.log('User information updated successfully');
        } catch (error) {
            console.error('Error updating user information:', error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpload(inputs)
        navigate('/nobubblefound')
    }

    return (
        <div className='background'>
            <div className='title'>About Me</div>
            <img className='edit-image' src={editImg} alt='edit profile'></img>
            <div className='form'>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="major">Major</label><br></br>
                <input className="form-input" type="text" id="major" name="major" value={inputs.major} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="minor">Minor</label><br></br>
                <input className="form-input" type="text" id="minor" name="minor" value={inputs.minor} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="tags">Tags</label><br></br>
                <div className='sub-label'>(enter tags that you think represent your learning style as a comma-separated list)</div>
                <input className="form-input" type="text" id="tags" name="tags" value={inputs.tags} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="Additional Info">Additional Info</label><br></br>
                <textarea className="form-input" id="bio" name="bio" rows="3" cols="36" value={inputs.bio} onChange={handleChange}></textarea>
                <br></br>
                <input className="form-submit" type="submit" value="SAVE AND CONTINUE"></input>
            </form>
            </div>
        </div>
    );
}

export default AboutMe;