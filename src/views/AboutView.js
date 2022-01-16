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
              I am currently a 4th-year Computer Science Honours student at
              Carleton University, specializing in Business and Systems
              Management. My interest in software development sparked when I
              began gaming and video editing.
              <br />
              <br />
              Since then, I have tapped into multiple
              sub-industries within the tech realm and allowed myself to grow an
              understanding of what goes on within a program.
              <br />
              <br />
              My goal is to become a highly skilled software engineer that will
              be ready to take on the challenges of tomorrow. I am always
              looking for opportunities to grow, be it internship or mentorship.
              <br />
              <br />
              Whenever I am not coding, I enjoy spending my free time dressing
              up, listening to my favourite artists, hanging out with my friends, exercising
              or thinking of new ideas.
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
  height: max-content;
  strong {
    color: var(--primary-color);
  }

  .right-content {
    padding: 0 2rem;
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
    width: max-content;
    padding: 1rem 0;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      object-fit: cover;
    }
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
