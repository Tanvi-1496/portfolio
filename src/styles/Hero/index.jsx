import styled, { keyframes } from "styled-components";
import DevsImage from "../../assets/devs-image.png";

export const HeroContainer = styled.div`
  width: 100%;
  padding: 140px;
  padding-bottom: 70px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1106px) {
    padding-inline: 90px;
  }

  @media (max-width: 768px) {
    padding-inline: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 375px) {
    padding-inline: 15px;
  }
`;

export const HeroWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

export const DevsInfoImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const DevsInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const DevsDesignationWrap = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const DevsDesignation = styled.h1`
  font-size: 55px;
  color: #2d2e32;

  @media (max-width: 1106px) {
    font-size: 45px;
  }

  @media (max-width: 856px) {
    font-size: 35px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const HelloHand = styled.span`
  color: #e9aa1b;
`;

export const DevDescWrap = styled.div`
  width: 100%;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 800px;
  }
`;

export const DevsDesc = styled.p`
  color: grey;
  font-size: 15px;

  @media (max-width: 1106px) {
    font-size: 13px;
  }

  @media (max-width: 856px) {
    font-size: 11px;
  }
`;

export const DevsSocialLinksWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const DevsSocialLinks = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
`;

export const DevsImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1106px) {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const blobAnimation = keyframes`
  0% {
    border-radius: 42% 58% 70% 30% / 45% 35% 65% 55%;
  }
  50% {
    border-radius: 65% 35% 30% 70% / 40% 60% 35% 65%;
  }
  100% {
    border-radius: 42% 58% 70% 30% / 45% 35% 65% 55%;
  }
`;

export const DevsImgWrap = styled.div`
  width: 340px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #3f47cc, #6f7dff);
    animation: ${blobAnimation} 8s ease-in-out infinite;
    z-index: 0;
  }

  img {
    width: 70%;
    height: auto;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1106px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 856px) {
    width: 260px;
    height: 260px;
  }
  @media (max-width: 360px) {
    width: 220px;
    height: 220px;
  }
`;

export const DevsImg = styled.img`
  width: 100%;
`;

export const DevsTechStackWrap = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const DevsTechStack = styled.div`
  font-weight: 700;
  border-right: 1px solid black;
  padding-right: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 856px) {
    font-size: 14px;
    padding-right: 8px;
  }
`;

export const DevsSkillsWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 856px) {
    font-size: 14px;
  }
`;

export const Html = styled.div`
  color: #dd4b25;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const Css = styled(Html)`
  color: #1b73ba;
`;

export const Js = styled(Html)`
  color: #e2c430;
`;

export const ReactJs = styled(Html)`
  color: #61dbfb;
`;

export const Redux = styled(Html)`
  color: #7248b6;
`;

export const Java = styled(Html)`
  color: #df2e2e;
`;

export const Android = styled(Html)`
  color: #3973a4;
`;
