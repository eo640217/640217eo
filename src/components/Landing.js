import React from 'react'
import Particles from './Particle';
import styled from 'styled-components'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'

export const Landing = () => {
    return (
        <LandingPageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className='typography'>
                <h1>Hello World, I'm<br /> <span><h1 className='name'>EMMANUEL OLUFELO.</h1></span></h1>
                <p className='subtitle'>

                    <h1>
                        <span className='txt-type' data-wait="3000" data-words='["Developer", "Engineer", "Data Science", "Full Stack"]'></span>
                    </h1>
                    {/* <br /> */}
                    Welcome to my portfolio!
                </p>
                <div className='icons'>
                    <a href='https://github.com/eo640217' target="_blank" id="Github" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/emmanuel-olufelo-70775420b/' target="_blank" id="Linkedin" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </LandingPageStyled>
    )
}

const LandingPageStyled = styled.header`
    width: 100%;
    height: 100vh;
    /* background-image: url('https://images.unsplash.com/photo-1504615184385-a3568a1c846e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'); */
    /* background-image: url('https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'); */
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
        text-align:center;
    }
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
    .icons{
        justify-content: center;
        display: flex;
        .icon{
            display: inline-block;
            padding: 0.25rem 0.25rem;
            transition: all .4s ease-in-out;
            &:hover{
                color:var(--primary-color);
            }
        }
    }
    h1{
        font-size: 1.5rem;
        color: var(--primary-color);
        position: relative;
        .name{
            font-size: 3rem;
            color:white;
            align-items: center;
        }
    }
    .name::before{
        background:var(--border-color);
        animation: typewriter var(--typewriterSpeed) steps(24) forwards;
    }
    .name::after{
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        background:var(--border-color);
        animation: typewriter var(--typewriterSpeed) forwards;
    }

    @keyframes typewriter{
        to {left: 100%}
    }

    @media(min-width:1200px){
        h1{
            font-size: 2rem;
        }
    }
  

`;
