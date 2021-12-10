import React from 'react'
import { NavLink } from 'react-bootstrap'
import styled from 'styled-components'

const Button = ({ filter, button }) => {
    return (
        <ButtonsStyled>
            {
                button.map((but, index) => {
                    return (
                        <ButtonStyled key={index} onClick={() => filter(but)}>
                            <span>{but}</span>
                        </ButtonStyled>
                    )
                })
            }

        </ButtonsStyled>
    )
}
const ButtonStyled = styled.button`
    border-radius: 10px;
    background-color: var(--background-dark-color);
    border: none;
    transition: 0.2s ease-out;
    color: var(--white-color);
    opacity: 0.3;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--primary-color);
    position: relative;
    overflow: hidden;
    :focus{
        opacity:1 ;
    }
    
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(146, 148, 248, 0.4),
            transparent
            );
            transition: all 650ms;
    }
    
    :hover{
        color: var(--white-color);
        background-color: var(--border-color);
        transition: 0.2s ease-in;
        border-radius: 0;
        opacity: 1;        
        box-shadow: 1px 1px 25px 10px var(--border-color);
        :before {
            left: 100%;
        }
}


`;

const ButtonsStyled = styled.div`
width: 50%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
gap: 1rem;
margin: 2rem 5vw;
padding: 0;
list-style-type: none;
text-align: center;
`;
export default Button
