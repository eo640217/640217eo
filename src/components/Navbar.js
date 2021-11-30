import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="nav-container">
                <nav className="navbar">
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </NavbarStyled>
    )
}
const NavbarStyled = styled.nav`
position: fixed;
z-index:1;
top: 0;
display: flex;
width: 100%;
justify-content: center;        

.navbar ul{
    display: flex;
    list-style: none;
    width: 100vh;
    justify-content:center;
    background-color: rgba(16,18,26,0.5);
}
.navbar ul li{
    padding: 1rem;
    margin: 0 1rem;
    a{
        text-decoration: none;
        &:hover{
            color: var(--white-color);
            transition: .4s ease-out;
        }
    }
}

/* .nav-container{
    overflow-y:scroll;
    scroll-behavior: smooth;
} */



`

export default Navbar
