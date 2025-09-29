import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 60px 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isContact ? "#f1f1f1" : "  background-color: #F9F9F9;"};

  @media (max-width: 1125px) {
    padding-inline: 40px;
  }

  @media (max-width: 600px) {
    padding-inline: 20px;
    padding-block: 20px;
  }
`;

export const ProjectWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 600px) {
     gap: 40px;
  }
`;

export const ProjectHeadingWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const HeadingDescWrap = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #509941;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProjectNumber1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const ProjectNumber2 = styled(ProjectNumber1)`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ProjectImageCont = styled.div``;

export const ProjectImageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const ProjectInfoWrap = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  align-items: center;
`;

export const ProjectName = styled.h4`
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const ProjectDescWrap = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const ProjectDesc = styled.p`
  font-size: 15px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const TechnologyWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Technology = styled.h4`
  font-weight: 600;
`;

export const CodeLink = styled.a`
  text-decoration: none;
  color: black;
`;
