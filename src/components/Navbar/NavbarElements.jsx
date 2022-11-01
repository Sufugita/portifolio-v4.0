import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaSun } from 'react-icons/fa'

export const Nav = styled.nav`
    
    background: ${(props) => props.theme.BackColor};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    `

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width: 1100px;
    
    @media screen and (max-width: 768px) {
        display: flex;
        position: relative;
        text-align: center;             
    }
`

// Logo //
export const NavLogo = styled.div`
    color: ${(props) => props.theme.TextColor};
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: 24px;
    transform: scale(1);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-left: -15px;        
    }

`
export const NavLinks = styled(LinkS)`
    color:${(props) => props.theme.TextColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
        
    &:hover {
        color: ${(props) => props.theme.PrimaryColor};
        border-bottom: 3px solid ${(props) => props.theme.PrimaryColor};
    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: flex;
        position: relative;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;     
        color:${(props) => props.theme.TextColor};
        white-space: nowrap;
    }
    &:hover {
        color: ${(props) => props.theme.PrimaryColor};
        transition: 0.2s ease-in-out;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavIconTheme = styled(FaSun)`
    position: relative;
    color: ${(props) => props.theme.TextColor};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    background: transparent;
    cursor: pointer;
    outline: none;
    white-space: nowrap;
    

    &:hover {
        color: ${(props) => props.theme.PrimaryColor};
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        position: relative;
        left: auto;
        right: auto;
        text-align: center;
        font-size: 1.6rem;
        margin-right: 15px;
             
    }

`

export const NavBtnLink = styled(LinkS)`
    border-radius: 10px;
    background: ${(props) => props.theme.PrimaryColor};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${(props) => props.theme.TextColor};
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${(props) => props.theme.PrimaryColor};
        color: ${(props) => props.theme.SecondColor};
        font-size: 17px;
    }
`
