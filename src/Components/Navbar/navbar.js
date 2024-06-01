import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link, animateScroll} from 'react-scroll'; 
import menu from '../../assets/menu.png';
import ArrowUp from '../../assets/UpArrow.png'

const Navbar = (props) => {

  const[showMenu,setshowMenu] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const hideDiv = () => {
    setIsVisible(false);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    // Add your toggle switch logic here
  };

  const handleLogoClick = () => {
    // Programmatically navigate to the main page
    window.location.href = '/';
  };
  
  const [hovered, setHovered] = useState(false);
  const scrollToTop = () => {
    setHovered(true);
    // Reset the hover effect after a short delay (for demonstration purposes)
    setTimeout(() => {
      setHovered(false);
    }, 300);
    animateScroll.scrollToTop({
      duration: 400,
      smooth: true
    });
  };



 

  
  return (
    <>
    <nav className="navbar">
      <img src={logo} alt="Logo" className=' logo' onClick={handleLogoClick}  />
      <div className="desktoMenu">
        <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
        <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >About</Link>
        <Link activeClass='active'to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Projects</Link>
        <Link activeClass='active'to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Contact</Link>

      </div>
      {/* <button className="desktopMenuBtn" onClick={()=>
        {
            
        }}>
        <img src={contactImg} alt="contactImg" className='DesktopMenuImg'  />
        Contact Me
      </button> */}
      
        <div className="darkmode">
        
        <label className={`switch form-switch text-${props.mode===`dark`?`light` : `dark`} switch ${isChecked ? 'on' : 'off'}` }>
        <input type="checkbox" checked={isChecked} onChange={handleToggle}  onClick={props.toggleMode}  />
        <span className="slider"></span>
        </label>
        </div>
        
    
    

      <img src={menu} alt="Manu" className='MobMenu' onClick={()=>setshowMenu(!showMenu)} />
       

      <div className="NavMenu" style={{display : showMenu? 'flex':'none'}}>
        <Link activeClass='active'to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>
        <Link activeClass='active'to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>About</Link>
        <Link activeClass='active'to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Projects</Link>
        <Link activeClass='active'to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Contact</Link>
      </div>
      
    </nav>

    <div>
      {isVisible && (
        <div id="myDiv" className='alert'>
          <p>Open the website on PC or Laptop for better experiance..!</p>
          <button className="AlertBtn"onClick={hideDiv}>Close</button>
        </div>
      )}
    </div>

    <div className="ArrowUP">
      <img src={ArrowUp} alt="ArrowUp" className="arrowup"  onClick={scrollToTop} onMouseLeave={() => setHovered(false)}/>
    </div>

    </>
    
  )
}
export default Navbar;
