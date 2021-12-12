import React, { useEffect } from "react";
import styled from "styled-components";
import { Landing } from "./views/LandingView";
import { AboutView } from "./views/AboutView";
import { ResumeView } from "./views/ResumeView";
import { ContactView } from "./views/ContactView";
import { ProjectsView } from "./views/ProjectsView";
import { SkillsView } from "./views/SkillsView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <MainContentStyled>
        <Navbar />
        <div data-aos="fade" data-aos-once="false">
          <section id="landing">
            <Landing />
          </section>
        </div>
        <div data-aos="fade" data-aos-once="false">
          <section id="projects">
            <ProjectsView />
          </section>
        </div>
        <div data-aos="fade" data-aos-once="false">
          <section id="skills">
            <SkillsView />
          </section>
        </div>
        <div data-aos="fade" data-aos-once="false">
          <section id="resume">
            <ResumeView />
          </section>
        </div>
        <div data-aos="fade" data-aos-once="false">
          <section id="about">
            <AboutView />
          </section>
        </div>
        <div data-aos="fade" data-aos-once="false">
          <section id="contact">
            <ContactView />
          </section>
        </div>
      </MainContentStyled>
      <Footer />
    </div>
  );
}

const MainContentStyled = styled.main``;

export default App;
