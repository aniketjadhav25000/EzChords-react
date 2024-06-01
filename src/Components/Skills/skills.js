import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = (props) => {

    const backgroundColorClass = props.mode === 'dark' ? 'darkBackground' : 'lightBackground';

    // Define the text color based on the mode
    const textColorClass = props.mode === 'dark' ? 'lightText' : 'darkText';
  return (
    <section className="skills" >
        <span className="skillsTitle">What I do</span>
        <span className="skillsdescription">
            I am an ardent and dedicated web developer with substantial 
            experience in the art of designing and developing user-friendly 
            web applications. My passion lies in the meticulous crafting of
            websites that embody the principles of simplicity and functionality, 
            seamlessly intertwining user-friendliness with the highest 
            standards of design excellence.

            In my journey as a web developer, I prioritize the creation of digital 
            spaces that not only meet but exceed user expectations. I am committed
             to ensuring that the web applications I develop go beyond mere 
             functionality by incorporating a design ethos that reflects a 
             harmonious blend of user-friendly interfaces and aesthetic brilliance.
        </span>
        <div className="skillbars" >
        <div className={`skillbar ${backgroundColorClass}`}>
          <img src={UIDesign} alt="UIDesign" className='skillImage' />
          <div className={`skillBarText ${textColorClass}`}>
                <h1 className='skillbarh1'>UI/UX Design</h1>
                <p className='skillbarPara'> 
                    I am a UI/UX , sculpting digital experiences with simplicity 
                    and functionality. Each design decision is a step towards user-friendly
                    interfaces that make an impact.
                </p>
                </div>
            </div>
            <div className={`skillbar ${backgroundColorClass}`}>
                <img src={WebDesign} alt="webiste-design" className='skillImage' />
                <div className={`skillBarText ${textColorClass}`}>
                <h1 className='skillbarh1'>Website Design</h1>
                <p className='skillbarPara'>I am a website design enthusiast, dedicated to crafting digital 
                    destinations where simplicity meets impact. With each line of 
                    code and pixel placed, I strive to create not just websites,
                     but immersive online experiences. 
                </p>
                </div>
            </div>

            <div className={`skillbar ${backgroundColorClass}`}>
          <img src={AppDesign} alt="app-design" className='skillImage' />
          <div className={`skillBarText ${textColorClass}`}>
                <h1 className='skillbarh1'>App Design</h1>
                <p className='skillbarPara'>I am an app design enthus iast, orchestrating digital journeys
                     with a fusion of innovation and practicality. In the realm
                      of app design, every screen and interaction is meticulously 
                      crafted to enhance user experience.
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
