import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import assets from '../../assets/assets'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={assets.Passport} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am technical graduate from Zeal College of Engineering and Research ,Pune.Motivated and detail-oriented web developer with hands-on experience in the MERN stack and a strong foundation in C++ and JavaScript. Skilled in building dynamic, user-focused websites, with a keen interest in web technology and cybersecurity. Certified in web technology, with a proven ability to deliver high-performance solutions. Eager to contribute to innovative projects and grow in the tech industry.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML/CSS</p><hr style={{width:"65%"}}/></div>
                <div className="about-skill"><p>MERN</p><hr style={{width:"55%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>SalesForce</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>C++/Java</p><hr style={{width:"70%"}}/></div>

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
