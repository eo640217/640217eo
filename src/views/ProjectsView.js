import React from 'react'
import styled from 'styled-components'
import Particle from '../components/Particle';
import { Title } from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import projects from '../data/projects'
import Project from '../components/Project'



export const ProjectsView = () => {
    return (
        <ProjectsViewStyled>
            <MainLayout>
                <Title title={'Projects'} span={'Projects'} />
                <InnerLayout>
                    <div className="projects">
                        {projects.map((project) => (
                            <div className='project'>
                                <Project project={project} />
                            </div>
                        ))}
                    </div>
                </InnerLayout>
            </MainLayout>
        </ProjectsViewStyled>
    )
}

const ProjectsViewStyled = styled.header`
    width: 100%;
    height: max-content;
    
    .projects{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 4rem 5vw;
        padding: 0;
        list-style-type: none;
    }
    .project{
        transition: 0.4s;
    }
    
    .projects:hover .project{
            opacity:0.4;

    }
    .projects .project:hover{
        opacity: 1;
    }  
    `