import './SignIn.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import homeFish from '../images/home-fish.png'

function Login () {
    const navigate = useNavigate();
    const { dispatch } = useUser();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: inputs.email,
                    password: inputs.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            const userData = await response.json();

            dispatch({type: 'SET_USER', payload: userData });
            navigate('/yourprofile')
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
        console.log('Login data submitted:', inputs)
    }
    
    const handleNewUserClick = () => {
        navigate('/signup')
    }
    const handleLoginClick = () => {
        navigate('/importcourses')
    }
    return (
        <div className='background'>
            <div className='title'>bubble</div>
            <img className='home-image' src={homeFish}></img>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label className="label" htmlFor="email">Email</label><br></br>
                    <input className="form-input" type="email" id="email" name="email" value={inputs.email} onChange={handleChange}></input>
                    <br></br>
                    <label className="label" htmlFor="password">Password</label><br></br>
                    <input className="form-input" type="password" id="password" name="password" value={inputs.password} onChange={handleChange}></input>
                    <br></br>
                    <input className="form-submit" type="submit" value="LOGIN"  onClick={handleLoginClick}></input>
                </form>
                <button className="new-user" onClick={handleNewUserClick} >NEW USER</button>
            </div>
        </div>
    );
}

export default Login;