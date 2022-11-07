import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSun } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavIconTheme, NavBtnLink } from './NavbarElements'
import Logo from '../../images/LogoDevR02.png'

const Navbar = ({ toggle, changeTheme }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Link to = "/">
                        <NavLogo>
                            <img src={Logo} alt="" />
                        </NavLogo>
                    </Link>
                    <NavIconTheme onClick={changeTheme}>
                        <FaSun />
                    </NavIconTheme>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="hero">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Portfolio</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="contact">Contact</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar