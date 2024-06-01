import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [mode,setMode] = useState('#242424');
  const [DarkText,setDarkText] = useState('Enable light mode');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('#242424');
      setDarkText('Enable light mode');
      document.body.style.backgroundColor='#242424';
      document.body.style.color='white';
      
      
    }
    else
    {
      setMode('light');
      setDarkText('Enable dark mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }

    setIsDarkMode(!isDarkMode);
  }


  return (

    
    <>
    
    <Router>

    <Navbar mode={mode} toggleMode = {toggleMode}  DarkText={DarkText}/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Contact mode={mode}/>
    <Footer mode={mode}/>

    <Routes>
      </Routes>
    </Router>
    </>
  );
}

export default App;
