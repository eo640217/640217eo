import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import { Title } from '../components/Title'
import ImageSection from '../components/ImageSection'
import image from '../images/avatar.jpg'



export const AboutView = () => {
    return (
        <MainLayout>
            <Title title={'About Me'} span={'About Me'} />

            <AboutStyled>

                <div className="left-content">
                    <img src={image} alt="about image" />
                </div>
                <div className="right-content">

                    <h4>I am <span>Emmanuel</span></h4>
                    <p className="paragraph">
                        I am currently a 4th-year Computer Science Honours student at Carleton University,
                        specializing in Business and Systems Management. My interest in computer science sparked when I began gaming
                        and video editing.<br /><br />Computer science has since allowed me to tap into multiple sub-industries within the tech
                        realm and allowed me to grow an understanding of what goes on within a program.<br /><br />Over the course of my degree,
                        I learned languages such as Swift, Python, JavaScript, Java, C/C++, Prolog, SQL, Kotlin as well as work with
                        WebDriverIO, Node.js, React, JSON, CSS, MongoDB, PostgreSQL, Redux, Jupyter and Git.<br /><br />Programming is a skill
                        I have a passion for, especially due to my enjoyment of problem-solving.So, I am always looking to sharpen
                        my skills in the field.
                    </p>
                    <div>
                        <div className="about-info">
                            <div className="info-title">
                                <p>Full Name</p>
                                {/* <p>Location</p> */}
                                <p>Languages</p>
                            </div>
                            <div className="info">
                                <p>: Emmanuel Olufelo</p>
                                {/* <p>: Brampton, Ontario Canada</p> */}
                                <p>: English / French</p>
                            </div>
                        </div>
                    </div>

                </div>

            </AboutStyled>
        </MainLayout>
    )
}


const AboutStyled = styled.section`
display: flex;
margin-top: 5rem;
@media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
.right-content{
    padding: 0 5rem;
    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
            color: var(--primary-color);
        }
    }
    .about-info{
        display: flex;
        p{
            font-size: 1rem;
        }
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        .info-title, .info{
            padding: 1rem 0;
            p{
                padding: 0.01rem 0;
            }
        }
    }
    .paragraph{
        font-size: 0.85rem;
        padding: 1rem 0;
        color: var(--white-color);
        text-align: justify;        
    }
}
.left-content{
        width: 100%;
        vertical-align: middle;
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 95%;
            object-fit: cover;
            border-radius: 50%;
            max-width: 300px;
        }
    }

    `

