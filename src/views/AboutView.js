import React from "react";
import styled from "styled-components";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import { Title } from "../components/Title";
import image from "../images/avatar.jpg";

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
              <strong>I</strong> am currently a 4th-year Computer Science
              Honours student at Carleton University, specializing in Business
              and Systems Management. My interest in computer science sparked
              when I began gaming and video editing.
              <br />
              <br />
              <strong>C</strong>omputer science has since allowed me to tap into
              multiple sub-industries within the tech realm and allowed me to
              grow an understanding of what goes on within a program.
              <br />
              <br />
              <strong>O</strong>ver the course of my degree, I have learned
              languages such as Swift, Python, JavaScript, Java, C/C++, Prolog,
              SQL, Kotlin as well as work with WebDriverIO, Node.js, React,
              JSON, CSS, MongoDB, PostgreSQL, Redux, Jupyter and Git.
              <br />
              <br />
              <strong>P</strong>rogramming is a skill I have a passion for,
              especially due to my enjoyment of problem-solving. So, I am always
              looking to sharpen my skills in the field.
            </p>
            <div>
              <div className="about-info">
                <div className="info-title">
                  <p>Full Name </p>
                  <p>Languages </p>
                </div>
                <div className="info">
                  <p> : Emmanuel Olufelo</p>
                  <p> : English / French</p>
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .right-content {
    padding: 0 2rem;
    .about-info {
      padding-bottom: 0.4rem;
      display: flex;
      font-size: 0.8rem;
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
      border-radius: 50%;
      max-width: 300px;
    }
  }
`;
