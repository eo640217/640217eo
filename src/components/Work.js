import React from 'react'
import styled from 'styled-components'
import projects from '../data/projects'
import { Row, Col } from 'react-bootstrap'
import Project from './Project'


export const Work = () => {
    return (
        <WorkPageStyled>
            <div className="work-con">
                <div className="title">
                    <h1>Work</h1>
                </div>
                <div className='projects'>
                    {/* <div className="card-grid"> */}
                    <Row>
                        {projects.map((project) =>
                            <Col md={4} key={project.name}>
                                <Project project={project} />
                            </Col>
                        )}
                    </Row>
                    {/* </div> */}
                </div>
            </div>
        </WorkPageStyled>
    )
}

const WorkPageStyled = styled.header`
    width: 100%;
    height: 100vh;
    padding: 0rem 10rem;
    text-align:center;
    background-color: var(--color-white);
    .work-con{
        display: grid;
        display: inline-block;
    }
    .title{
        h1{
            font-size: 2rem;
            text-align:left;
            padding-top: 2rem;
            color:var(--background-dark-color);
            border-bottom: 2px solid red;
            width: max-content;
        }
    }
    .projects{
        text-align:center;
        width: 50vh;
        display: grid;
        display: inline-block;
        p{
            font-family: Martel;
        }
    }

    div{
        /* outline: 1px solid red; */
    }
  `
