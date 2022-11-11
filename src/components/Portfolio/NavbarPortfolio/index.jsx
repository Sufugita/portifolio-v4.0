import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, NavIconBack } from './NavbarPElements'
import Logo from '../../../images/LogoDevR02.png'
import { MdKeyboardBackspace } from 'react-icons/md'



const NavbarPortfolio = () => {

    // Hooks to back a page, like alt + <-... Good uses when you dont want to refresh a page.
    const navigate = useNavigate()

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Link to='/'>
                        <NavLogo>
                            <img src={Logo} alt="" />
                        </NavLogo>
                    </Link>
                    <NavIconBack onClick={() => navigate(-1)}>
                        <MdKeyboardBackspace />
                    </NavIconBack>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavbarPortfolio