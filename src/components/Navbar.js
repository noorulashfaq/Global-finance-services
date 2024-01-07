import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
    <div className='landing-navbar'>
        <img src={logo} alt='logo' className='logo' />
        <a className='company-name' href='/'>Global Finance</a>
            <div className='nav-links'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Loans</a>
                <a href='#'>Contact</a>
            </div>
        <a href='/login'><button>Login</button></a>
    </div>
    )
}

export default Navbar
