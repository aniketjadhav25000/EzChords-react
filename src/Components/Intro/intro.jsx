import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpg'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const words = ["Website Designer", "Android Dev", "Java Developer"]; // Add your desired words
        let wordIndex = 0;
        let charIndex = 0;

        function typeWriter() {
            const container = document.getElementById("typewriter-container");
            const currentWord = words[wordIndex];

            if (charIndex < currentWord.length) {
                container.textContent += currentWord.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 150); // Adjust typing speed (milliseconds)
            } else {
                setTimeout(eraseText, 4000); // Delay before erasing
            }
        }

        function eraseText() {
            const container = document.getElementById("typewriter-container");

            if (container.textContent.length > 0) {
                container.textContent = container.textContent.slice(0, -1);
                setTimeout(eraseText, 150); // Adjust erasing speed (milliseconds)
            } else {
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                charIndex = 0;
                setTimeout(typeWriter, 500); // Delay before typing the next word
            }
        }

        // Initial start
        setTimeout(typeWriter, 500);

// Initial start
setTimeout(typeWriter, 500);

const Intro = (props) => {

    const emailAddress = 'aniket.jadhav20703@gmail.com';

    const handleHireMeClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };
  
    
  return (
   <section className="intro" >
     
    <div className="introContent" >

        <div className="introUppernames">
            <span className="hello">Hello,</span><br />
            <span className="introText">I'm</span> <span className="introname">Aniket </span><br />
        </div>
        <div class="typewriter" id="typewriter-container">
            
            </div>
       
          
        <p className="introPara">I am a passionate and enthusiastic web developer with a wealth 
        of  experience in creating user-friendly web applications.
         My expertise extends to crafting websites that embody simplicity 
         and functionality,where user-friendliness seamlessly meets design excellence. 
         Additionally, I bring in-depth knowledge and proficiency as an Android and 
         Java developer, adding versatility to my skill set. My commitment is to deliver 
         innovative solutions and elevate user  experiences across various platforms.</p>
        <Link ><button className="btn" onClick={handleHireMeClick}><img src={btnImg} alt="hirebtn" className='btnImg' /> Hire me</button></Link>
    </div>


    <img src={bg} alt="profile" className='bg' />
    
   </section>
  )
} 

export default Intro;
