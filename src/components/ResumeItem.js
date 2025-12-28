import React from "react";
import styled from "styled-components";

const ResumeItem = ({ year, title, subtitle, description }) => {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        {description.map((paragraph, index) => (
          <div key={index} className="resume-paragraph"><p>{paragraph}</p></div>
        ))}
      </div>
    </ResumeItemStyled>
  );
};
const ResumeItemStyled = styled.div`
  display: flex;
  p,
  h5,
  font-size: clamp(0.8rem, 2vw + 0.8rem, 1rem);
  h6 {
  }

  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    flex-shrink: 0;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    margin-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -80px;
      top: 15px;
      height: 2px;
      width: 2rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
    }
    h6 {
      padding-bottom: 0.4rem;
      color: var(--white-color);
    }
    p {
      padding-bottom: 0.4rem;
      text-align: justify;
      line-height: 1.4;
    }
  }

  @media (max-width: 540px) {
    display: grid;
    p {
      font-size: clamp(0.8rem, 1vw + 0.3rem, 0.4rem);
    }
  }

  

  @media (max-width: 1000px){
    .left-content {
      flex-shrink: 1;
    }
  }


  .resume-paragraph {
    position: relative;
    padding-top: 0.75rem;
    margin-top: 1rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;          /* line length */
      height: 1px;
      background-color: var(--primary-color);
      opacity: 0.6;
    }

    p {
      margin: 0;
    }
  }

`;
export default ResumeItem;
