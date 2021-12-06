import React from 'react'
import styled from 'styled-components'


export const ResumeView = () => {
    return (
        <ResumeViewStyled>
            <div className="resume-con">
                <div className="title">
                    <h1>Resume</h1>
                </div>
            </div>

        </ResumeViewStyled>
    )
}

const ResumeViewStyled = styled.header`
    width: 100%;
    height: 100vh;
    /* outline: 2px dotted var(--white-color); */
    /* background-color: var(--border-color); */
    
    `