import styled from "styled-components";
import { ReactComponent as MailIcone } from "../../image/message.svg";
import { mediaQuery } from "../../theme";

export const StyledHeader = styled.div`
    margin: 115px auto 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 32px 16px;
    }
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
    border: 1px solid ${({ theme }) => `${theme.color.primaryBorder}3`};
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

    &:hover {
        outline: none;
        filter: brightness(120%);
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.color.hoverBorder};

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