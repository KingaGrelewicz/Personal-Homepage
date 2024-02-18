import styled from "styled-components";
import { ReactComponent as MailIcone } from "../../image/message.svg";
import { ReactComponent as ModeIcon } from "../../image/modeIcon.svg";
import { mediaQuery } from "../../theme";

export const StyledHeader = styled.div`
    margin: 115px auto 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        max-width: 320px;
        margin: 32px 16px;
    }
`;

export const HeaderToggleMode = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: end;
    grid-gap: 12px;
    padding: 15px;
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
    
    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: auto;
    }
`;

export const HeaderTogglerLabel = styled.span`
    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        display: none;
    }
`;

export const HeaderToggler = styled.button`
    cursor: pointer;
    height: 26px;
    width: 48px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.togglerBackground};
    display: flex;
    align-items: center;
    padding: 3px;
    margin: -5px; 
`;

export const HeaderTogglerIcon = styled.div`
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    background: ${({ theme }) => theme.color.primaryTextColor};
    transition: 0.7s;
    transform: ${({ $isToggled }) => ($isToggled 
    ? 'translateX(100%) rotate(180deg)' 
    : 'translateX(0%) rotate(0deg)'
    )};
`;

export const HeaderModeIcon = styled(ModeIcon)`
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.secondaryBackground};
`;

export const HeaderImage = styled.img`
    width: 356px;
    height: 356px;
    border-radius: 50%;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        width: 128px;
        height: 128px;
    }
`;

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 38px;
    font-weight: 900;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 22px;
    }
`;

export const HeaderContent = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.primaryTextColor};
    padding-left: 64px;
    padding-right: 32px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        padding: 0px;
        font-size: 17px;
    }
`;

export const HeaderButton = styled.a`
    width: fit-content;
    text-decoration: none;
    background: ${({ theme }) => theme.color.mainBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primaryBorder};
    border-radius: 4px; 
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    align-items: center;
    margin-top: 32px;
    transition: color 0.5s;

    &:visited {
        border-color: 1px ridge ${({ theme }) => `${theme.color.visited}2`};
    }

    &:hover {
        outline: none;
        border: 3px solid ${({ theme }) => theme.color.hoverBorder};
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(150%);
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin-top: 24px;
    }
`;

export const HeaderMailIcone = styled(MailIcone)`
    stroke: ${({ theme }) => theme.color.white};
`;