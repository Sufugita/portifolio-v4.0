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
                            <NavLinks to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" spy={true} smooth={true} offset={0} duration={500} >About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"spy={true} smooth={true} offset={0} duration={500} >Portfolio</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="contact"spy={true} smooth={true} offset={80} duration={500}>Contact</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar