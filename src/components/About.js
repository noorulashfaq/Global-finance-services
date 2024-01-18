import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h1>ABOUT <br/>OUR COMPANY</h1>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
        </p>
        </div>
      {/* <div className='vis-mis-container'> */}
      <div className='vision-container'>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid</p>
        <h1>VISION</h1>
      </div>
      <div className='mission-container'>
        <h1>MISSION</h1>
        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid</p>
      </div>
      {/* </div> */}
    </div>
  )
}

export default About
