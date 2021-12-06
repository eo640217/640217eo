import React from 'react'
// import { About } from './components/About';
// import { Contact } from './components/Contact';
// import { Sidebar } from './components/Sidebar'
import styled from 'styled-components';
import { Landing } from './views/LandingView';
import { AboutView } from './views/AboutView';
import { ResumeView } from './views/ResumeView';
import { ContactView } from './views/ContactView';
import { ProjectsView } from './views/ProjectsView';
import { SkillsView } from './views/SkillsView'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}
      </MainContentStyled>
      <section id="landing"><Landing /></section>
      <section id="projects"><ProjectsView /></section>
      <section id="resume"><ResumeView /></section>
      <section id="about"><AboutView /></section>
      <section id="contact"><ContactView /></section>
      <section id="skills"><SkillsView /></section>

    </div>
  );
}

const MainContentStyled = styled.main`
  /* background-color: red; */
.lines{
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .line-1, .line-2,.line-3, .line-4{
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);
  }
}
`;

export default App;
