import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div>
      <div className='landing-container'>
        <h1><span>G</span>LOBAL <span>F</span>INANCE</h1>
        <h5>SERVICES</h5>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. </p>
        <a href='#'><button>Contact</button></a>
        {/* <div id="earth"></div> */}
      </div>
    </div>
  );
};

export default Landing;
