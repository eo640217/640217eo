import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="nav-container">
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="landing"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span>Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span>Skills</span>
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
                <span>Resume</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span>About</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavbarStyled>
  );
};
const NavbarStyled = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  width: 100%;
  color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  span {
    font-size: 2vw;
  }

  .navbar ul {
    border-radius: 25px;
    flex-wrap: wrap;
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: var(--white-color);
      background-color: var(--background-dark-color);
    }
  }
  .navbar ul li {
    padding: 1rem;
    margin: 0 1rem;
    font-weight: 700;
    cursor: pointer;
    a {
      transition: 0.4s ease-in-out;
    }
  }

  @media (min-width: 350px) {
    .navbar ul li {
      margin: 0;
    }
    span {
      font-size: 2vw;
    }
  }

  .nav-item {
    position: relative;
  }

  .nav-item:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    height: 5px;
    background: var(--background-dark-color);
    opacity: 0;
    bottom: 9px;
    transition: all 0.2s ease-out;
  }
  .nav-item:hover:before {
    transform: translateY(10px);
    opacity: 1;
    background: var(--primary-color);
  }
`;

export default Navbar;
