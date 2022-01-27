import React from 'react';
import logo from '../images/logo.png';
import profile from '../images/profile.jpg';
import './Navbar.css';
export default function Navbar() {
    return <div className='navbar'>
        <div className='left'>
            <img src={logo} alt="log" />
        </div>
        <div className='right' title='Click image to show details'>
            <a href="/personaldetails">
                <img src={profile} alt="profile_picture" className='profile-picture' /></a>
        </div>
    </div>
}
