import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtnLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="hero" onClick={toggle} spy={true} smooth={true} offset={0} duration={500}>Home</SidebarLink>
                    <SidebarLink to="about" onClick={toggle} spy={true} smooth={true} offset={0} duration={500}>About Me</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle} spy={true} smooth={true} offset={0} duration={500}>Portfolio</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarBtnLink to="contact" onClick={toggle} spy={true} smooth={true} offset={0} duration={500}>Contact</SidebarBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar