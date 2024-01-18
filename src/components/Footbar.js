import React from 'react'
import '../styles/Footbar.css'

const Footbar = () => {
  return (
    <div className='footbar-container'>
        <div className='footbar-text'>
            <h3>Global Finance Services</h3>
            <h6>+91 1234567890</h6>
            <h6>globalfinance@gmail.com</h6>
            <div className='social-media'>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
            </div>
        </div>
    </div>
  )
}

export default Footbar
