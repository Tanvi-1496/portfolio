import styled from 'styled-components'

export const NavWrap = styled.div`
    width: 100%;
    padding: 20px 40px;
    position: fixed;
    top:0;
    box-shadow: 0 0 10px rgba(0,0,0,.09);
    z-index: 99;
    background-color: white;

    @media (max-width: 600px)
    {
        padding-inline: 15px;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DevNameWrap = styled.div`
    
`

export const DevName = styled.h3`
    
`

export const NavLinksWrap = styled.div`
    display: flex;
    gap: 60px;

    @media (max-width: 768px){
        display: none;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 600;

    &:hover{
        color : #40A2E3;
        transition: all .4s ease-in-out;
    }

    @media (max-width: 768px)
    {
        font-size: 20px;
    }
`

export const HamburgerWrap = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        display: flex;
        font-size: 30px;
        color: black;
        cursor: pointer;
    }
`

export const CrossWrap = styled.div`
     display: none;

    @media (max-width: 768px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 4;
        right: 20px;
        top: 40px;
    }
`

export const ResponsiveNavLinks = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        background-color: white;
        position: absolute;
        top: 0;
        left:0px;
        animation : left .4s ease-out;
        z-index: 99999;

        @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
    }
    
`