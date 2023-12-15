import './SignIn.css'
import React from "react";
import { useState } from 'react';
import homeFish from '../images/home-fish.png'

function Login () {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
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
        console.log('Login data submitted:', inputs)
    }
    return (
        <div className='background'>
            <div className='title'>bubble</div>
            <img className='home-image' src={homeFish}></img>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label className="label" for="email">Email</label><br></br>
                    <input className="form-input" type="text" id="email" name="email" value={inputs.email} onChange={handleChange}></input>
                    <br></br>
                    <label className="label" for="password">Password</label><br></br>
                    <input className="form-input" type="password" id="password" name="password" value={inputs.password} onChange={handleChange}></input>
                    <br></br>
                    <input className="form-submit" type="submit" value="LOGIN"></input>
                </form>
                <button className="new-user">NEW USER</button>
            </div>

        </div>
    );
}

export default Login;