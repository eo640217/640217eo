import React from 'react'
import Particle from '../components/Particle';
import styled from 'styled-components'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import avatar from '../images/avatar.jpg'


export const Landing = () => {
    return (
        <LandingPageStyled>
            <div className="particles-con">
                <Particle />
            </div>
            <div className='typography'>
                <h1>Hello World, I'm<br /> <span><h1 className='name'>Emmanuel Olufelo.</h1></span></h1>
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
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
                <div className='chev-con'>
                    <div class="chevrons">
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </div>
                </div>
            </div>
        </LandingPageStyled>
    )
}

const LandingPageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    text-align:center;
    *{
        /* outline: 1px solid red ; */
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
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
        font-size: clamp(1.5rem,3vw + 1rem,4rem);
        color: var(--primary-color);
        position: relative;
        /* width: max-content; */
        .name{
            text-align:center;
            font-size: 3rem;
            color:white;
            align-items: center;
        }
    }

    .name::before, .name::after{
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .name::before{
         /* background-image: avatar; */
        background:var(--border-color);
        animation: typewriter var(--typewriterSpeed) forwards;
    }

    .avatar{
        width: max-content;
        border-color: var(--border-color);
        position: relative;
        padding: 1rem 0;
        transition-delay: 2s;  
        animation: 3s fadeIn;
        animation: float 3s infinite normal ease-in-out;
        img{
            width: 16%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    @keyframes float {
        0% {
        top:-10px;
        }
        50% {
            top: 5px;
        }
        100% {
            top: -10px;
        }
    }   

    @keyframes typewriter{
        to {
            left: 100%
        }
    }
    @keyframes fadeIn {
        99% {
            visibility: hidden;
        }
        100% {
            visibility: visible;
        }
    }

    @media(min-width:1200px){
        h1{
            font-size: 2rem;
        }
    }
    .chev-con{
        display: flex;
        justify-content: center;
    }

    .chevrons {
        position: relative;
        width: 28px;
        height: 24px;
    }

    .chevron {
        position: absolute;
        width: 28px;
        height: 8px;
        opacity: 0;
        transform: scale3d(0.5, 0.5, 0.5);
        animation: move 3s ease-out infinite;
    }

    .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
    }

    .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
    }

    .chevron:before,
    .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
    }

    .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
    }

    .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
    }

    @keyframes move {
    25% {
        opacity: 1;
    }
    33% {
        opacity: 1;
        transform: translateY(30px);
    }
    67% {
        opacity: 1;
        transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
    }

    @keyframes pulse {
    to {
        opacity: 1;
    }
    }


    
   
  

`;
