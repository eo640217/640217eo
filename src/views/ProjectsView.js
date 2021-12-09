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
                <InnerLayout>
                    <Title title={'Projects'} span={'Projects'} />
                    <div className="projects">
                        {projects.map((project) => (
                            <div className='project'>
                                <Project project={project} ></Project>
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
    border: 0;
    margin: 0;
    padding: 0;

    @media(min-width: 540px){
    .projects{
        grid-template-columns: repeat(2, 1fr); 
        }
    }

    @media(min-width: 960px){
        .projects{
            grid-template-columns: repeat(4, 1fr); 
            }
        }    
    
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
        transform: scale(1.05) translateZ(0);
    }    
    
    .projects:hover > .project:not(:hover){
        opacity:0.4;
        filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }
    `