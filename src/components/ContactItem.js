import React from 'react';
import styled from "styled-components";
const ContactItem = ({ icon, title, contact1 }) => {
    return (
        <ContactItemStyled>
            <div className='left-content'>
                {icon}
            </div>
            <div className='right-content'>
                <span>
                    {title}
                    {contact1}
                </span>
            </div>

        </ContactItemStyled>
    )
}
const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    outline: solid var(--primary-color) 1px;
    background-color: var(--background-dark-grey);
    display: flex;
    height: max-content;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    span{
        transition: all .4s ease-in-out;
        &:hover{
            color: var(--color-white);
        }
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }
`;

export default ContactItem
