import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'


const Project = ({ project }) => {
    return (
        <ProjectComponentStyled>
            <div className='card'>
                <div className='card-image'>
                    <img src={project.image} alt={project.name} />
                </div>
                <div className='card-overlay'>
                    <div className='card-header'>
                        <svg className="card-arc" xmlns="http://www.w3.org/2000/svg">
                            <path d='M 40 80 c 22 0 40 -22 40 -40 v 40 Z' id='path' />
                        </svg>
                        <img className="card-thumb" src={project.image} alt="" />
                        <div className="card-header-text">
                            <a href={project.liveLink}>
                                <h3 className="card-title">{project.name}</h3>
                            </a>
                            <span className="card-status">{project.year}</span>
                        </div>
                    </div>
                    <p className="card-description">{project.description}</p>
                </div>
            </div>
        </ProjectComponentStyled >
    )
}


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
    width: 100%;
    height: auto;
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;      
    background-color: var(--background-dark-color);  
    border-radius: calc(var(--curve) * 1px) 0 0 0 ;    
    color: var(--white-color);
    text-align: center ;   
    transform: translateY(50%);
    transition: .2s ease-in-out;
}

.card:hover{
    transition: all .2s ease-in-out;   

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
.card:hover .card-header {
    transform: translateY(0);
}

.card-thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;      
    border-radius: 50%;      
}

.card-title {
    font-size: 1em;
    margin: 0 0 .3em;
    color: var(--primary-color);
}

.card-tagline {
    display: block;
    margin: 1em 0;
    font-family: "MockFlowFont";  
    font-size: .8em; 
    color: #D7BDCA;  
}

.card-status {
    font-size: .8em;
    color: #D7BDCA;
}

.card-description {
    padding: 0 2em 2em;
    margin: 0;
    color: #D7BDCA;
    font-family: "MockFlowFont";   
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}    
`
export default Project;

