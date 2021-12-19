import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import { Title } from '../components/Title'
import ContactItem from '../components/ContactItem'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PrimaryButton from '../components/PrimaryButton';


export const ContactView = () => {
    const phone = <PhoneIcon />;
    const location = <LocationOnIcon />;
    const email = <EmailIcon />;
    return (
        <MainLayout>
            <Title title="Contact" span="Contact" />
            <ContactViewStyled>
                <InnerLayout className="contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Let's Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" id="name">Name </label>
                                <input id="name" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email">Email </label>
                                <input id="email" type="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="subject">Subject </label>
                                <input id="subject" type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message </label>
                                <textarea id="textarea" name="textarea" cols="30" rows="8" />
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Email: '} icon={email} contact1={'eolufelo@gmail.com'} />
                        <ContactItem title={'Phone: '} icon={phone} contact1={'647 283 9607'} />
                        <ContactItem title={'Location: '} icon={location} contact1={'Brampton, ON'} />
                    </div>
                </InnerLayout>
            </ContactViewStyled>
        </MainLayout >
    )
}

const ContactViewStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            padding:2rem 0;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -20px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
    
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%; 
                    padding: .8rem 1rem;
                }     
            }
            
        }
    }
    `;