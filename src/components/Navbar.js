import React from 'react'
import logo from '../assets/logo.png';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
    <div className='landing-navbar'>
        <img src={logo} alt='logo' className='logo' />
        <a className='company-name' href='/'>Global Finance</a>
            <div className='nav-links'>
                {/* <a href='#'>Home</a> */}
                <a href='#'>Loans</a>
                <a href='#'>Services</a>
                <a href='#'>Contact</a>
            </div>
    </div>
    )
}

export default Navbar
