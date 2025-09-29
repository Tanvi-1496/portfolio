import React from "react";
import {
  AboutContainer,
  AboutDevsDesc,
  AboutDevsDescWrap,
  AboutDevsDesignation,
  AboutDevsDesignationWrap,
  AboutHeading,
  AboutImageContainer,
  AboutImageWrap,
  AboutImg,
  AboutInfoWrap,
  AboutWrap,
  BallWrap,
  CircularText,
  CircularTextWrap,
  TechGuyImg,
} from "../../styles/About";
import LaptopImg from "../../assets/laptop.jpg";
import TechGuy from "../../assets/man-technologist.png";

const About = () => {
  const text = "FRONT-END DEV";

  return (
    <AboutContainer id="About">
      <AboutWrap>
        <AboutImageContainer>
          <AboutImageWrap>
            <AboutImg src={LaptopImg} />
            <BallWrap>
              <TechGuyImg src={TechGuy} />
              <CircularTextWrap>
                <CircularText>
                  {text.split("").map((letter, i) => (
                    <span style={{ transform: `rotate(${i * 18}deg)` }}>
                      {letter}
                    </span>
                  ))}
                </CircularText>
              </CircularTextWrap>
            </BallWrap>
          </AboutImageWrap>
        </AboutImageContainer>
        <AboutInfoWrap>
          <AboutHeading>ABOUT ME</AboutHeading>
          <AboutDevsDesignationWrap>
            <AboutDevsDesignation>
              A dedicated Frontend Developer
            </AboutDevsDesignation>
          </AboutDevsDesignationWrap>
          <AboutDevsDescWrap>
            <AboutDevsDesc>
              As a Junior Front-End Developer, I bring a strong foundation in
              HTML, CSS, JavaScript, React, and Redux, with a proven ability to
              design and maintain responsive, user-friendly websites. I
              specialize in creating dynamic and engaging interfaces by writing
              clean, optimized code and leveraging modern development tools and
              best practices. Beyond web development, I also build mobile
              applications using Java for Android, expanding my versatility
              across platforms. My approach blends technical expertise with
              creativity, ensuring seamless user experiences on both web and
              mobile. I thrive in collaborative environments, working closely
              with cross-functional teams to deliver high-quality applications
              that meet both business goals and user needs. With a continuous
              drive to learn and grow, I am eager to contribute innovative
              solutions and expand my impact as a developer.
            </AboutDevsDesc>
          </AboutDevsDescWrap>
        </AboutInfoWrap>
      </AboutWrap>
    </AboutContainer>
  );
};

export default About;
