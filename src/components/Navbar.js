import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { MainLayout } from '../styles/Layouts';

const Navbar = () => {
    return (
        <MainLayout>
            <NavbarStyled>
                <div className="nav-container">
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Projects

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="resume"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Resume

                                </Link>
                            </li><li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    About

                                </Link>
                            </li><li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Skills

                                </Link>
                            </li><li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    Contact

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <RestartAltIcon />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </NavbarStyled>
        </MainLayout>
    )
}
const NavbarStyled = styled.nav`
    position: fixed;
    z-index:1;
    top: 0;
    display: flex;
    width: 100%;
    color: rgba(255,255,255,0.3);
    justify-content: center;

    .navbar ul{
        border-radius:25px ;
        display: flex;
        list-style: none;
        width: 100vh;
        justify-content:center;
        transition: all .4s ease-in-out;
        &:hover{
            color: var(--white-color) ;
            background-color:var(--border-color);
            border-radius:35px ;
            }
        }       
    .navbar ul li{
        padding: 1rem;
        margin: 0 1rem;
        cursor: pointer;
        a{
            text-decoration: none;
            transition: .4s ease-in-out;
            &:hover{
                color: var(--primary-color);
        }
    }
}
        `

export default Navbar
