import styled, {keyframes} from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 70px 90px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1125px)
    {
      padding-inline: 50px;
    }

    @media (max-width: 600px)
    {
      padding-inline: 30px;
      padding-top: 60px;
    }
`

export const AboutWrap = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media (max-width: 768px)
    {
      flex-direction: column;
      text-align: center;
    }
`

export const AboutImageContainer = styled.div`
    width: 100%;
`

export const AboutImageWrap = styled.div`
    width: 100%;
    position: relative;
`

export const BallWrap = styled.div`
    width: 110px;
    height: 110px;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    bottom: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const CircularTextWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${rotateAnimation} 8s linear infinite;
`


export const CircularText = styled.p`
    span {
        position: absolute;
        top: 3px;
        left: 55px;
        font-size: 14px;
        display: flex;
        transform-origin: 0 52px;
        
    }
`;

export const TechGuyImg = styled.img`
    width: 100%;
    max-width: 40px;
`



export const AboutImg = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`

export const AboutInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const AboutHeading = styled.h4`
    color: #0e92ff;
    font-size: 15px;

    @media (max-width: 768px)
    {
      font-size: 13px;
    }

    @media (max-width: 392px)
    {
      font-size: 12px;
    }
`

export const AboutDevsDesignationWrap = styled.div`
    
`

export const AboutDevsDesignation = styled.h2`
    @media (max-width: 1125px)
    {
      font-size: 22px;
    }

    @media (max-width: 600px)
    {
      font-size: 18px;
    }

    @media (max-width: 392px)
    {
      font-size: 15px;
    }
`

export const AboutDevsDescWrap = styled.div`
    
`

export const AboutDevsDesc = styled.p`
    color: grey;
    font-size: 14px;
    line-height: 2;

    @media (max-width: 1125px)
    {
      font-size: 13px;
    }

    @media (max-width: 600px)
    {
      font-size: 12px;
    }
`