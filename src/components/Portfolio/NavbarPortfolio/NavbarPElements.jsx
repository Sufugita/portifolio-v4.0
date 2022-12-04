import styled from 'styled-components'

export const Nav = styled.nav`
   
    background: ${(props) => props.theme.BackColor};
    height: 80px;
    margin-top: -80px;
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
export const Header = styled.div`
    display: flex;
    color: #333;
    font-size: 30px;
    font-weight: 700;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
// Logo //
export const NavLogo = styled.div`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-top: 8px;
    transform: scale(1);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-left: -15px;        
    }

`
export const NavIconBack = styled.div`
    display: flex;
    font-size:3rem;
    cursor: pointer;
    color: #0077ff;
    margin-top: 16px;

    &:hover{
      color: #0077ff80;
      transform: scale(1.1)
    }
`