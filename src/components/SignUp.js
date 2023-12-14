import './SignIn.css'
import React from "react";
import { useState } from 'react';
import homeFish from '../images/home-fish.png'

function SignUp () {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
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
        console.log('Sign Up data submitted:', inputs)
    }
    return (
        <div className='background'>
            <div className='title'>bubble</div>
            <img className='home-image' src={homeFish}></img>
            <div className='form'>
            <form onSubmit={handleSubmit}>
                <label class="label" for="name">Name</label><br></br>
                <input class="form-input" type="text" id="name" name="name" value={inputs.name} onChange={handleChange}></input>
                <br></br>
                <label class="label" for="email">Email</label><br></br>
                <input class="form-input" type="text" id="email" name="email" value={inputs.email} onChange={handleChange}></input>
                <br></br>
                <label class="label" for="password">Password</label><br></br>
                <input class="form-input" type="password" id="password" name="password" value={inputs.password} onChange={handleChange}></input>
                <br></br>
                <label class="label" for="phoneNumber">Phone Number</label><br></br>
                <input class="form-input" type="text" id="phone" name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange}></input>
                <br></br>
                <input class="form-submit" type="submit" value="REGISTER"></input>
            </form>
            </div>

        </div>
    );
}

export default SignUp;