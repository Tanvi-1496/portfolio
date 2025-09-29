import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 30px 140px;
    background-color: #2D2E32;

    @media (max-width: 1125px)
    {
        padding-inline: 60px;
    }

    @media (max-width: 768px)
    {
        padding-inline: 30px;
    }

    @media (max-width: 480px)
    {
        padding-inline: 15px;
    }

`

export const FooterWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    @media (max-width: 500px)
    {
        flex-direction: column;
    }
`

export const CopyrightWrap = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 420px)
    {
        text-align: center;
    }
`

export const CopyrightDesc = styled.p`
    color: white;

    @media (max-width: 550px)
    {
        font-size: 13px;
    }

`

export const SocialLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const SocialLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;

    @media (max-width: 550px)
    {
        font-size: 17px;
    }

`