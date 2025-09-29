import styled from "styled-components";


export const ContactWrap = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 542px)
    {
        gap: 40px;
    }
`

export const DevsContactInfoWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 60px;

    @media (max-width: 768px)
    {
        justify-content: center;
    }

    @media (max-width: 542px)
    {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

export const DevsLocationInfoWrap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

export const DevLocationIcon = styled.div`
    font-size: 30px;
    color: #0e92ff;
    display: flex;
    align-items: center;

    @media (max-width: 375px)
    {
        font-size:24px;;
    }
`

export const DevsLocationInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const DevsLocationHeading = styled.h4`

    @media (max-width: 375px)
    {
        font-size: 15px;;
    }
`

export const DevsLocationDesc = styled.p`
    color: #585858;
    font-size: 15px;

    @media (max-width: 375px)
    {
        font-size: 13px;;
    }
`