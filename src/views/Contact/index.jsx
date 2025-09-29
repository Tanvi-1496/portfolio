import React from 'react'
import { HeadingDescWrap, ProjectContainer, ProjectHeadingWrap, ProjectWrap } from '../../styles/Projects'
import { AboutDevsDesignation, AboutHeading } from '../../styles/About'
import { FaHandPointDown } from "react-icons/fa";
import { ContactWrap, DevLocationIcon, DevsContactInfoWrap, DevsLocationDesc, DevsLocationHeading, DevsLocationInfo, DevsLocationInfoWrap } from '../../styles/Contact';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  return (
    <ProjectContainer id = "Contact" isContact = "true">
        <ContactWrap>
            <ProjectHeadingWrap>
                <AboutHeading>CONTACT</AboutHeading>
                <HeadingDescWrap>
                    <AboutDevsDesignation>Don't be shy! Contact me! <span style = {{color : "#FFC83D"}}> <FaHandPointDown /> </span> </AboutDevsDesignation>
                </HeadingDescWrap>
            </ProjectHeadingWrap>
            <DevsContactInfoWrap>
                <DevsLocationInfoWrap>
                    <DevLocationIcon>
                        <FaMapLocationDot />
                    </DevLocationIcon>
                    <DevsLocationInfo>
                        <DevsLocationHeading>
                            Location
                        </DevsLocationHeading>
                        <DevsLocationDesc>
                            Mumbai, India
                        </DevsLocationDesc>
                    </DevsLocationInfo>
                </DevsLocationInfoWrap>
                <DevsLocationInfoWrap>
                    <DevLocationIcon>
                        <FaEnvelopeOpenText />
                    </DevLocationIcon>
                    <DevsLocationInfo>
                        <DevsLocationHeading>
                            Mail
                        </DevsLocationHeading>
                        <DevsLocationDesc>
                            vibhavari.14092006@gmail.com
                        </DevsLocationDesc>
                    </DevsLocationInfo>
                </DevsLocationInfoWrap>
            </DevsContactInfoWrap>
            </ContactWrap>
    </ProjectContainer>
  )
}

export default Contact