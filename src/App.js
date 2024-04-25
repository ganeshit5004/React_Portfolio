
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import SocialMedia from './components/SocialMedia';
import Skill from './components/Skill';
import Contact from './components/Contact';
import emailjs from '@emailjs/browser'
function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sv3r0bo','template_c2rg0v3',e.target,'oQzsfIXcH7GiGBGlN')
  }

  return (
    <div> 
      <NavBar />
      <Home />
      <SocialMedia/>
      <About/>
      <Project />
      <Skill />
      <Contact sendEmail={sendEmail}/>
    </div>
  );
}

export default App;
