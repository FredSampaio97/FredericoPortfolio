import React, { useEffect } from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_pic from '../../assets/profile_pic_fred_about.jpeg'


const About = () => {

    function adjustSkillBars(){
        const skillBars = document.querySelectorAll('.skill-bar');
        const screenWidth = window.innerWidth;

        skillBars.forEach(skillbar => {
            const originalWidth = skillbar.getAttribute('data-width');
            if(screenWidth <= 600){
                skillbar.style.width = `calc(${originalWidth} * 0.38)`;
            }else{
                skillbar.style.width = originalWidth;
            }
        })
    }

    useEffect(() => {
        // Ensure that this runs after the DOM is fully loaded
        window.addEventListener('load', adjustSkillBars);
        window.addEventListener('resize', adjustSkillBars);
    
        return () => {
          window.removeEventListener('load', adjustSkillBars);
          window.removeEventListener('resize', adjustSkillBars);
        };
      }, []);

  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className='aboutme-profile-pic' src={profile_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A sports enthusiast who loves reading about culture and history, I am passionate about learning and improving myself every day. Cheerful and sociable, I have always liked to build new friendships. </p>
                    <p>Professionally, I'm organized, proactive, and work efficiently. I love teaching and helping others.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr className="skill-bar" data-width="80%" />
                    </div>
                    <div className="about-skill">
                        <p>PHP & JavaScript</p>
                        <hr className="skill-bar" data-width="60%" />
                    </div>
                    <div className="about-skill">
                        <p>React Js & Node</p>
                        <hr className="skill-bar" data-width="50%" />
                    </div>
                    <div className="about-skill">
                        <p>PostgreSQL</p>
                        <hr className="skill-bar" data-width="50%" />
                    </div>
                    <div className="about-skill">
                        <p>Git e Github</p>
                        <hr className="skill-bar" data-width="80%" />
                    </div>
                    </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2</h1>
                <p>FULLSTACK WEB DEVELOPMENT COURSES COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1</h1>
                <p>BACHELHOR'S DEGREE IN ACCOUNTING AND ADMINISTRATION</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF CONSULTING IN TAX AND ACCOUNTING EXPERIENCE</p>
            </div>
        </div>
    </div>
  )
}

export default About