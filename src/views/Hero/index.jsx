import React from "react";
import {
  Css,
  DevDescWrap,
  DevsDesc,
  DevsDesignation,
  DevsDesignationWrap,
  DevsImgContainer,
  DevsImgWrap,
  DevsInfoImgWrap,
  DevsInfoWrap,
  DevsSkillsWrap,
  DevsSocialLinks,
  DevsSocialLinksWrap,
  DevsTechStack,
  DevsTechStackWrap,
  HelloHand,
  HeroContainer,
  HeroWrap,
  Html,
  Java,
  Js,
  Android,
  ReactJs,
  Redux,
} from "../../styles/Hero";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import DevsImg from "../../assets/devs-image.png";

const Hero = () => {
  return (
    <HeroContainer id="Home">
      <HeroWrap>
        <DevsInfoImgWrap>
          <DevsInfoWrap>
            <DevsDesignationWrap>
              <DevsDesignation>
                Front-End Developer &nbsp;
                <HelloHand>
                  <MdWavingHand />
                </HelloHand>
              </DevsDesignation>
            </DevsDesignationWrap>
            <DevDescWrap>
              <DevsDesc>
                Hi, I'm Tanvi. A passionate Frontend Developer.
              </DevsDesc>
            </DevDescWrap>
            <DevsSocialLinksWrap>
              <DevsSocialLinks
                href="https://www.linkedin.com/in/shreyash-patil-525009220/"
                target="_blank"
              >
                <FaLinkedin />
              </DevsSocialLinks>
              <DevsSocialLinks
                href="https://github.com/Tanvi-1496?tab=repositories"
                target="_blank"
              >
                <FaGithub />
              </DevsSocialLinks>
            </DevsSocialLinksWrap>
          </DevsInfoWrap>
          <DevsImgContainer>
            <DevsImgWrap>
              <img src={DevsImg} alt="Developer" />
            </DevsImgWrap>
          </DevsImgContainer>
        </DevsInfoImgWrap>
        <DevsTechStackWrap>
          <DevsTechStack>Tech Stack</DevsTechStack>
          <DevsSkillsWrap>
            <Html>
              <FaHtml5 />
            </Html>
            <Css>
              <FaCss3Alt />
            </Css>
            <Js>
              <IoLogoJavascript />
            </Js>
            <ReactJs>
              <FaReact />
            </ReactJs>
            <Redux>
              <SiRedux />
            </Redux>
            <Java>
              <FaJava />
            </Java>
            <Android>
              <FcAndroidOs />
            </Android>
          </DevsSkillsWrap>
        </DevsTechStackWrap>
      </HeroWrap>
    </HeroContainer>
  );
};

export default Hero;
