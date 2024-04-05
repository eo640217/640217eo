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
              As a recent graduate from Carleton University, specializing in
              Business and Systems Management, I have cultivated a multifaceted
              understanding of technology and its applications. My journey into
              software development began with my fascination for gaming and
              video editing, igniting a passion that has driven me to explore
              various sub-industries within the tech realm.
              <br />
              <br />
              With a solid foundation in computer science and a keen interest in
              software engineering, I am committed to becoming a highly skilled
              professional capable of tackling the challenges of tomorrow's
              digital landscape. I am actively seeking opportunities for growth,
              whether through internships or mentorships, to further refine my
              skills and expand my knowledge.
              <br />
              <br />
              Outside of coding, I embrace my diverse interests, including
              fashion, music, socializing with friends, staying active, and
              nurturing my creativity through brainstorming new ideas. I believe
              in maintaining a well-rounded lifestyle that fuels both personal
              and professional growth.
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
