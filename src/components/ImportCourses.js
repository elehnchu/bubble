import './SignIn.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import homeFish from '../images/home-fish.png'
import uni from '../images/uni.png'

function ImportCourses () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/retrievecourses')
    }

    return (
        <div className='background'>
            <div className='title'>Import Courses</div>
            <div className='sub-title'>from SSOL</div>
            <img className='uni-image' src={uni} alt='uni' onClick={handleClick}></img>
            <div className='footnote'>
                This is a secure login to SSOL. Your credentials will only be used to retrieve your Columbia Courses.
            </div>
            
            <img className='home-image' src={homeFish} alt='fish'></img>
        </div>
    );
}

export default ImportCourses;