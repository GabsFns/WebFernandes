import React from 'react';
import HeaderPortfolio from "./components/LandingPage/HeaderPortfolio";
import TitleApresentacao from "./components/LandingPage/TitleApresentacao";
import About from "./components/About/About";
import Skills from "./components/ProjectsPort/Skills";
import Projects from "./components/ProjectsPort/ProjectsPort";
import PageContact from "./components/Contact/PageContact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <HeaderPortfolio
        navegacao1="about"
        navegacao2="skills"
        navegacao3="projects"
        navegacao4="contact"
      />
      
      <TitleApresentacao />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <PageContact id="contact" />
      <Footer />
    </>
  );
}

export default App;