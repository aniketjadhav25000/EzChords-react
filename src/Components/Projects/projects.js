import React from 'react'
import './projects.css';
import EzChordsImg from '../../assets/ezchordsImg.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';
import EzLogo from '../../assets/logo1.png';
import {Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="projects">
        <h2 className="projectTitle">My Projects</h2>
        <span className="projectsDescription">Welcome to my portfolio, 
          where I showcase a diverse range of projects that reflect my passion 
          for web development. With a focus on delivering innovative solutions,
          each project embodies a unique blend of creativity, functionality,
          and user-centric design.Explore my projects below to witness firsthand
          the dedication and skill I bring to each endeavor. 
        </span>
        <div className="projectImgs">
          <div className="image-container"> 
            <img src={EzChordsImg} alt="" className="projectImg" />
              <img src={EzLogo} alt="logo" className='EzLogo' />
              <div className="overlay">
              <p className="EzPara">Discover the ultimate guitar resource at <span className="EzSpan">EzChords</span>  . Learn essential chords, 
                from beginner basics to advanced techniques. Explore our extensive collection of Bollywood and Hollywood song chords, 
                enabling you to play along with your favorite hits.
              </p>
              <Link  to="https://ezchords-techygeek.netlify.app/"  target="_blank" rel="noopener noreferrer" ><button className="ProjectButton">visit site</button></Link>
              </div>
          </div>


            <div className="image-container"> 
            <img src={Portfolio2} alt="" className="projectImg" />
              <div className="overlay">
              <button className="ProjectButton">coming soon..!</button>
              </div>
            </div>
           

            <div className="image-container"> 
            <img src={Portfolio3} alt="" className="projectImg" />
              <div className="overlay">
              <button className="ProjectButton">coming soon..!</button>
              </div>
            </div>

            <div className="image-container"> 
            <img src={Portfolio4} alt="" className="projectImg" />
              <div className="overlay">
              <button className="ProjectButton">coming soon..!</button>
              </div>
            </div>

            <div className="image-container"> 
            <img src={Portfolio5} alt="" className="projectImg" />
              <div className="overlay">
              <button className="ProjectButton">coming soon..!</button>
              </div>
            </div>

            <div className="image-container"> 
            <img src={Portfolio6} alt="" className="projectImg" />
              <div className="overlay">
              <button className="ProjectButton">coming soon..!</button>
              </div>
            </div>   
        </div>
        <button className="projectBtn">See more</button>

    </section>
  )
}

export default Projects;