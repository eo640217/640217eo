import React from "react";
import Skill from "../components/Skill";
import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
// import avatar from "../images/avatar.jpg";
import skillsData from "../data/skills";

export const SkillsView = () => {
  return (
    <SkillsViewStyled>
      <MainLayout>
        <Title title={"Skills"} span={"Skills"} />
        <div className="hover-message">
          <p>Hover on skill for technologies / frameworks</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill">
              <span className="tooltip">
                <Skill title={skill.name} image={skill.image} />
                {skill.technologies.length ? (
                  <span className="tooltip-text">{skill.technologies}</span>
                ) : (
                  <></>
                )}
              </span>
            </div>
          ))}
        </div>
      </MainLayout>
    </SkillsViewStyled>
  );
};

const SkillsViewStyled = styled.div`
  width: 100%;
  height: max-content;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: default;

  .hover-message {
    margin: 2rem 0 0 0;
    opacity: 0.4;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }
  .skill {
    transition: 0.4s;
    transform: scale(1.05) translateZ(0);
    padding: 1rem;
  }

  .skills-grid:hover > .skill:not(:hover) {
    opacity: 0.4;
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }

  .tooltip {
    position: relative;
  }

  .tooltip .tooltip-text {
    font-size: 0.8em;
    line-height: 1.5em;
    visibility: hidden;
    max-width: max-content;
    background-color: var(--border-color);
    color: var(--white-color);
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -30px;
    opacity: 0;
    transition: 0.3s;
    transform: translate3d(0px, 20px, 0px);
  }
  .tooltip:hover .tooltip-text {
    visibility: visible;
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }
  @media (max-width: 540px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 540px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 800px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 940px) {
    .skills-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
