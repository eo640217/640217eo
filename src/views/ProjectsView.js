import React from 'react'
import styled from 'styled-components'
import Particle from '../components/Particle';



export const ProjectsView = () => {
    return (
        <ProjectsViewStyled>
            {/* <Particle /> */}
            <div className="projects-con">
                <div className="title">
                    <h1>Projects</h1>
                </div>
            </div>

        </ProjectsViewStyled>
    )
}

const ProjectsViewStyled = styled.header`
    width: 100%;
    height: 100vh;
    
    `