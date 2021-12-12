import React from "react";
import styled from "styled-components";

const Project = ({ project }) => {
  return (
    <ProjectComponentStyled>
      <div className="card">
        <div className="card-image">
          <img src={project.image} alt={project.name} />
          <div className="header-title">{project.name}</div>
        </div>
        <div className="card-overlay">
          <div className="card-header">
            <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
              <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" id="path" />
            </svg>
            <img className="card-thumb" src={project.image} alt="" />
            <div className="card-header-text">
              <a href={project.liveLink}>
                <h1 className="card-title">{project.name}</h1>
              </a>
              <span className="card-year">{project.year}</span>
            </div>
          </div>
          {/* <p className="card-description">{project.description}</p> */}
        </div>
      </div>
    </ProjectComponentStyled>
  );
};

const ProjectComponentStyled = styled.div`
  * {
    box-sizing: border-box;
  }

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
  }
  .card-image {
    max-height: 250px;
    background-size: cover;
    background-position: fill;
    border-radius: var(--spacing-l);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    filter: brightness(1) saturate(1.2) contrast(0.85);
    transform-origin: center;
    transform: scale(1) translateZ(0), translateX(-50%);
    transition: filter 200ms linear, transform 200ms linear;
    .header-title {
      font-weight: 700;
      transition: 0.2s ease-out;
      position: absolute;
      text-transform: uppercase;
      top: 15px;
      left: 26px;
      font-family: "Montserrat", sans-serif;
      color: var(--white-color);
      font-size: clamp(1rem, 3vw + 1rem, 1rem);
      text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
      line-height: 1.4;
      word-spacing: 100vw;
      font-family: "Montserrat", sans-serif;
    }
  }

  .card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: var(--background-dark-color);
    border-radius: calc(var(--curve) * 1px) 0 0 0;
    color: var(--white-color);
    text-align: center;
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover {
    transition: all 0.2s ease-in-out;
  }
  .card:hover .card-overlay {
    transform: translateY(0);
  }
  .card-arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card-arc path {
    fill: var(--background-dark-color);
    /* width: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z"); */
  }
  .card:hover {
    .card-header {
      transform: translateY(0);
    }
    .header-title {
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }
    .card-image {
      transform: scale(1.05) translateZ(0);
    }
  }

  .card-thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card-title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: var(--primary-color);
  }

  .card-year {
    font-size: 0.8em;
    color: var(--border-color);
  }

  .card-description {
    padding: 0 1em 2em;
    margin: 0;
    color: var(--white-color);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;
export default Project;
