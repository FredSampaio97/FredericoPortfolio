import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic_fred.jpeg'
import resume from '../../assets/FredericoSampaioCV2024.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='profile-pic' src={profile_pic} alt="" />
        <h1><span>I'm Frederico Sampaio</span>, FullStack Web Developer based in Lisbon.</h1>
        <p>At 26 years old, after working in accounting and administration for a year and a half, I found a new calling: to become a Full Stack Web Developer, dedicated to contributing to the success of web projects.</p>
        <div className="hero-desktop">
          <div className="hero-action">
              <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
              <a className="hero-resume" href={resume}>My resume</a>
          </div>
        </div>
        <div className="hero-mobile">
          <div className="hero-action">
              <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
              <a className="hero-resume" href={resume}>My resume</a>
          </div>
        </div>
        
    </div>
  );
};


export default Hero