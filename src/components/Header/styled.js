import styled from "styled-components";
import { ReactComponent as MailIcone } from "../../image/message.svg"
import { ReactComponent as ToggleOff } from "../../image/ToggleOff-light.svg"

export const StyledHeader = styled.div`
    max-width: 1188px;
    margin: 115px auto 0;
`;

export const HeaderImage = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
`;

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
`;

export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 38px;
    font-weight: 900;
`;

export const HeaderToggleMode = styled.span`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;
    padding: 5px 0;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    font-weight: 700;
`;

export const HeaderToggleOffIcone = styled(ToggleOff)`
    margin: -5px;
`;

export const HeaderContent = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.slateGray};
    padding-left: 64px;
    padding-right: 32px;
`;

export const HeaderButton = styled.a`
    width: fit-content;
    text-decoration: none;
    background: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.scienceBlue};
    border-radius: 4%; 
    padding: 12px 16px 12px 16px;
    font-size: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: center;
    margin-top: 32px;
    transition: color 0.5s;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(150%);
    }
`;

export const HeaderMailIcone = styled(MailIcone)`
    stroke: ${({ theme }) => theme.color.white};
`;



