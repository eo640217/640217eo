import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
import image from "../images/myself.jpg";

export const AboutView = () => {
  return (
    <MainLayout>
      <Title title={"About Me"} span={"About Me"} />
      <InnerLayout>
        <AboutStyled>
          <div className="left-content">
            <img src={image} alt="about" />
          </div>
          <div className="right-content">
            <p className="paragraph">
              I’m a software engineer with four years of professional experience building and maintaining user-focused, 
              scalable applications at the intersection of business and technology. With an academic background in Business 
              and Systems Management from Carleton University, I bring a pragmatic, systems-level mindset to software 
              development—balancing technical execution with product and business considerations.
              <br />
              <br />
              My path into engineering began through creative outlets like gaming and video editing, which sparked a long-standing 
              curiosity about how software is built and optimized. Since then, I’ve worked across multiple areas of the tech stack, 
              strengthening my foundation in computer science while developing a strong appreciation for clean architecture, 
              maintainable code, and thoughtful user experiences.
              <br />
              <br />
              I’m motivated by solving real-world problems and continuously improving my craft—whether that means refining system 
              designs, learning new technologies, or collaborating closely with cross-functional teams to deliver meaningful results. 
              I value environments that encourage ownership, growth, and technical excellence.
              <br />
              <br />
              Outside of work, I enjoy staying active, exploring fashion and music, and spending time with friends. 
              I’m naturally creative and enjoy brainstorming new ideas, believing that a well-rounded life ultimately 
              leads to better problem-solving and stronger work as an engineer.
            </p>
            <div>
              <div className="about-info">
                <div className="info-title">
                  <p>Full Name </p>
                  <p>Languages </p>
                </div>
                <div className="info">
                  <p> : Emmanuel Oluwatimilehin Olufelo</p>
                  <p> : English & French</p>
                </div>
              </div>
            </div>
          </div>
        </AboutStyled>
      </InnerLayout>
    </MainLayout>
  );
};

const AboutStyled = styled.section`
  display: flex;
  align-items: stretch;
  height: max-content;
  strong {
    color: var(--primary-color);
  }

  .right-content {
    padding: 0 2rem;
    max-width: 1000px;
    margin: 0 auto;
    .about-info {
      padding-bottom: 0.4rem;
      display: flex;
      p {
        font-size: clamp(0.8rem, 2vw + 0.8rem, 1rem);
      }
    }
    .paragraph {
      font-size: clamp(0.8rem, 2vw + 0.8rem, 1rem);
      padding: 1rem 0;
      color: var(--white-color);
      text-align: justify;
      line-height: 1.4;
    }
  }
  .left-content {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    max-height: 1000px;
    max-width: 300px;
    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      object-fit: contain;
    }
  }

  .left-content img {
    max-height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }


  @media (max-width: 700px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      img {
        max-width: 100px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .right-content {
      .paragraph,
      p {
        font-size: 75%;
      }
    }
  }
`;
