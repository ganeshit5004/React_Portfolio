
import './App.css';
import { useState } from "react";
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import SocialMedia from './components/SocialMedia';
import Skill from './components/Skill';
import Contact from './components/Contact';
import AiAssistant from './components/AiAssistant';
import emailjs from '@emailjs/browser'
function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sv3r0bo','template_c2rg0v3',e.target,'oQzsfIXcH7GiGBGlN')
  }
  const [chatOpen, setChatOpen] = useState(false);
  return (
     <div className="flex transition-all duration-300">
      
      {/* Portfolio Content */}
      <div className={` w-full transition-all duration-300`}>
        <NavBar />
        <Home />
        <About />
        <Project />
        <Skill />
        <Contact sendEmail={sendEmail} />
        <SocialMedia />
      </div>

      {/* AI Chat Sidebar */}
      <AiAssistant open={chatOpen} setOpen={setChatOpen} />

    </div>
  );
}

export default App;
