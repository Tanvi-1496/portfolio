import React, { useState } from 'react'
import { CrossWrap, DevName, DevNameWrap, HamburgerWrap, NavBar, NavLinks, NavLinksWrap, NavWrap, ResponsiveNavLinks } from '../../styles/Nav'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const navLinks = [
        {title : "home", link : "#Home"},
        {title : "about", link : "#About"},
        {title : "projects", link : "#Projects"},
        {title : "contact", link : "#Contact"},
    ]

    const [nav, setNav] = useState(true)

    !nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleNav = () => {
        setNav(!nav)
    }

    const handleOverflow = () => {
        setNav(true)
    }

  return (
    <NavWrap>
        <NavBar>
            <DevNameWrap>
                <DevName>Tanvi.dev</DevName>
            </DevNameWrap>   
            <NavLinksWrap>
            {navLinks.map((links) => (
                <NavLinks href = {links.link}>{links.title}</NavLinks>
                ))}
            </NavLinksWrap>
            <HamburgerWrap onClick={handleNav}>
                <GiHamburgerMenu /> 
            </HamburgerWrap>

            
            {!nav && (<ResponsiveNavLinks onClick={handleOverflow}> 
                <CrossWrap>
                    <RxCross2 />
                </CrossWrap>
            {navLinks.map((links) => (
                <NavLinks href = {links.link}>{links.title}</NavLinks>
                ))}
            </ResponsiveNavLinks>)}
           
        </NavBar>
    </NavWrap>
  )
}

export default Nav