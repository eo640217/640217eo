import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'


const Project = ({ project }) => {
    return (
        <ProjectComponentStyled>
            <div className='card'>
                <div className='card-title'>
                    {/* <h1>{project.name}</h1> */}
                </div>
                <div className='card-image'>
                    {/* <img src={project.image} alt={project.name} />image */}
                </div>
                <div className='card-body'>
                    {/* <p>{project.description}</p>body */}
                </div>

            </div>
        </ProjectComponentStyled >
    )
}

export default Project

const ProjectComponentStyled = styled.header`
border-radius: 20px;
background: rgba(255,255,255,0.03);

transition: all .4s ease-in-out;
*{
    /* outline:1px red solid; */
    width: max-content;
}


.card{
    display: grid;
    /* grid-template-columns: repeat(4,1fr);
    padding: 1rem 1rem;     */
}
.card-body{
    /* grid-column-start:3 ;
    grid-row-start: 3;
    grid-row-end: 4 ; */
}
.card-image{
    width: 1vh;
    /* grid-column-start:1 ;
    grid-row-start: 3;
    grid-row-end: 4 ; */
}
.card-title{
    /* grid-column-start:3 ;
    grid-row-start: 1;
    grid-row-end: 2 ; */
}



`

