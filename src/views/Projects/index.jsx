import React from 'react'
import { CodeLink, HeadingDescWrap, ProjectContainer, ProjectDesc, ProjectDescWrap, ProjectHeadingWrap, ProjectImage, ProjectImageCont, ProjectImageWrap, ProjectInfoWrap, ProjectName, ProjectNumber1, ProjectNumber2, ProjectWrap, Technology, TechnologyWrap } from '../../styles/Projects'
import { AboutDevsDesignation, AboutHeading } from '../../styles/About'
import { BsPuzzleFill } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import ProjectImg1 from '../../assets/spotify.png'
import ProjectImg2 from '../../assets/gym.png'
import ProjectImg3 from '../../assets/car-rental.png'
import ProjectImg4 from '../../assets/crypto.png'
import { FaCar } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { GiWeightLiftingUp } from "react-icons/gi";

const Projects = () => {
  return (
    <ProjectContainer id = "Projects">
        <ProjectWrap>
            <ProjectHeadingWrap>
                <AboutHeading>PROJECTS</AboutHeading>
                <HeadingDescWrap>
                    <AboutDevsDesignation>Each project is a unique piece of development <span><BsPuzzleFill/> </span></AboutDevsDesignation>
                </HeadingDescWrap>
            </ProjectHeadingWrap>
            <ProjectNumber1>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg1} />
                    </ProjectImageWrap>
                </ProjectImageCont>
                
                <ProjectInfoWrap>
                    <ProjectName>WEB MUSIC APP  <span><IoIosMusicalNotes/> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc>The website I developed offers a seamless music streaming experience, 
                        drawing inspiration from popular platforms like Spotify. Leveraging the power of React, 
                        users are able to explore a vast library of songs, 
                        add their favorite tracks to a personalized collection, and create their own playlists.</ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/spotify-app" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://spotify-app-seven-liard.vercel.app/HomePage" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
            </ProjectNumber1>
            <ProjectNumber2>
                <ProjectInfoWrap>
                    <ProjectName>GYM-APP <span><GiWeightLiftingUp/> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc>
                    A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users
                        achieve their fitness goals.
                    </ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/gym-app" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://gym-app-jade.vercel.app/" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg2} />
                    </ProjectImageWrap>
                </ProjectImageCont>
            </ProjectNumber2>
            <ProjectNumber1>
            <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg3} />
                    </ProjectImageWrap>
                </ProjectImageCont>
                <ProjectInfoWrap>
                    <ProjectName>CAR RENTAL  <span><FaCar /> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc> A car rental website is an online platform that allows users to rent cars for personal
                        or business use. The website provides an interface for searching, comparing, and reserving cars.
                    </ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/car-rental" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://car-rental-three-nu.vercel.app/" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
               
            </ProjectNumber1>
            <ProjectNumber2>         
                <ProjectInfoWrap>
                    <ProjectName>CRYPTO <span><SiHiveBlockchain /> </span> </ProjectName>
                <ProjectDescWrap>
                    <ProjectDesc>
                        CRYPTO is a crypto-currency app that allow users to search for information about various crypto-currencies in real-time.
                    </ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/crypto-app" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://crypto-app-eight-dun.vercel.app/" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg4} />
                    </ProjectImageWrap>
                </ProjectImageCont>
            </ProjectNumber2>
        </ProjectWrap>
    </ProjectContainer>
  )
}

export default Projects