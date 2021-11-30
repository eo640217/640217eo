import React from 'react'
import styled from 'styled-components'


export const ContactView = () => {
    return (
        <ContactViewStyled>
            <div className="contact-con">
                <div className="title">
                    <h1>Contact</h1>
                </div>
            </div>

        </ContactViewStyled>
    )
}

const ContactViewStyled = styled.header`
    width: 100%;
    height: 100vh;
    
    `