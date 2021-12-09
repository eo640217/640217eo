import React from 'react'
import Particle from '../components/Particle';
import styled from 'styled-components'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import avatar from '../images/avatar.jpg'


export const Landing = () => {
    return (
        <LandingPageStyled>
            <div className='landing-con'>
                <div className='particles-con'>
                    <Particle value={24} type={"triangle"} />
                </div>
                <div className='typography'>
                    <h1>Hello World, I'm<br /> <span><h1 className='name'>Emmanuel Olufelo.</h1></span></h1>
                    <div class="card">
                        <div class="scroller">
                            <span>
                                Software Engineer<br />
                                Data Analyst<br />
                                Full Stack Developer<br />
                                Freelance
                            </span>
                        </div>
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <p className='subtitle'>
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
            </div>
        </LandingPageStyled>
    )
}

const LandingPageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .particles-con{
        position: absolute;
        text-align:center;
        height: 100%;
        width: 100%;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);

    }
    
    .typography{        
        position: absolute;
        text-align:center;
        top: 50%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
        .name{
            position: relative;
            overflow: hidden;
            display: block;
            line-height: 1.2;
        }
        .name::after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: var(--white-color);
            border-right: red;
            animation: a-ltr-after 2s cubic-bezier(.77,0,.18,1) forwards;
            transform: translateX(-101%);
        }
        .name::before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: var(--background-dark-color);
            animation: a-ltr-before 2s cubic-bezier(.77,0,.18,1) forwards;
            transform: translateX(0);
        }

        .name:nth-of-type(1)::before,.name:nth-of-type(1)::after{
            animation-delay: 1s;
        }

        .name:nth-of-type(2)::before,
        .name:nth-of-type(2)::after{
            animation-delay: 1.5s;
        }
    }
    @keyframes a-ltr-after{
        0% {transform: translateX(-100%)}
        100% {transform: translateX(101%)}
    }

    @keyframes a-ltr-before{
        0% {transform: translateX(0)}
        100% {transform: translateX(200%)}
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

    .avatar{
        width: max-content;
        border-color: var(--border-color);
        position: relative;
        padding: 1rem 0;
        transition-delay: 2s;  
        animation: 3s fadeIn;
        animation: float 2.5s infinite normal ease-in-out;
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

.card {
    position: relative;
    cursor: default;
    padding:0.5rem 0;
    /* text-align: center */
}

/* Scroller styling */
.scroller {
    height: 1.2em;
    line-height: 1.2em;
    text-align:center;
    position: relative;
    overflow: hidden;
    width: 100%;

}
.scroller > span {
    position: relative;
    top: 0;
    animation: slide 8s infinite;
    color: var(--white-color);
    font-weight:bold;
}
@keyframes slide {
    0% {
        top: 0;
    }
    25% {
        top: -1.2em;
    }
    50% {
        top: -2.4em;
    }
    75% {
        top: -3.6em;
    }
}

`;
