import './SignIn.css'
import React from "react";
import { useState, useEffect } from 'react';
import homeFish from '../images/home-fish.png';
import { useNavigate } from 'react-router-dom';
import Back_arrow from "../images/Backward arrow.png";

function SignUp () {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const handleRegister = () => {
        fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
        .then(response => response.json())
        .then(data => console.log('User registered:', data))
        .catch(error => console.error('Error registering user:', error))
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegister();
    }
    return (
        <div className='background'>
            <div className = 'signup-container'>
                <div style={{ backgroundImage:`url(${Back_arrow})` }}className = "Back-arrow-signup" onClick={handleBackClick}>
                    </div>
                <div className='title'>bubble</div>
            </div>
            <img className='home-image' src={homeFish} alt='fishes'></img>
            <div className='form'>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="name">Name</label><br></br>
                <input className="form-input" type="text" id="name" name="name" value={inputs.name} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="email">Email</label><br></br>
                <input className="form-input" type="text" id="email" name="email" value={inputs.email} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="password">Password</label><br></br>
                <input className="form-input" type="password" id="password" name="password" value={inputs.password} onChange={handleChange}></input>
                <br></br>
                <label className="label" htmlFor="phoneNumber">Phone Number</label><br></br>
                <input className="form-input" type="text" id="phone" name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange}></input>
                <br></br>
                <input className="form-submit" type="submit" value="REGISTER"></input>
            </form>
            </div>

        </div>
    );
}

export default SignUp;