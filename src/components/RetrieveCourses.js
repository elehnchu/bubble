import './SignIn.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import homeFish from '../images/home-fish.png'
import retrieve from '../images/retrieve.png'

function RetrieveCourses () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/retrievecourses')
    }

    const handleNextClick = () => {
        navigate('/aboutme')
    }

    return (
        <div className='background'>
            <div className='title'>Import Courses</div>
            <div className='sub-title'>from SSOL</div>
            <img className='uni-image' src={retrieve} alt='uni' onClick={handleClick}></img>
            <div className='footnote'>
                Courses can be imported again through settings.
            </div>
            <div>
                <button id="next-button" onClick={handleNextClick}>NEXT</button>
            </div>
            <img className='home-image' src={homeFish} alt='fish'></img>
        </div>
    );
}

export default RetrieveCourses;