import React from 'react';
import '../styles/Landing.css';
import landingbg from '../assets/landingbg.png'

const Landing = () => {
  return (
    <div>
      <div className='landing-container'>
        <img src={landingbg} alt='landing' className='landing-img'/>
      </div>
    </div>
  );
};

export default Landing;
