import styled, { keyframes } from "styled-components";
import { ReactComponent as PortfolioGitHubIcon } from "../../image/Github_black.svg";
import { mediaQuery } from "../../theme";

export const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 592px);
    grid-gap: 32px;
    justify-content: center;
    margin: 72px 0 120px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        margin: 48px 16px;
    }
`;

export const PortfolioIcon = styled(PortfolioGitHubIcon)`
    width: 40px;
    height: 40px;
    display: flex;
    margin: 0 auto;
    fill: ${({ theme }) => theme.color.mainBlue};

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        width: 30px;
        height: 30px;
    }
`;

export const PortfolioHeader = styled.h2`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    margin: 12px 0 8px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const PortfolioSubheader = styled.h3`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin: 8px 0 24px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 17px;
        margin: 16px 0 24px 0;
    }
`;

export const PorftolioLoading = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.color.secondaryTextColor};

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 17px;
    }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const PortfolioLoadingSpinner = styled.img`
    animation: ${rotate360} 5s linear infinite;
    display: flex;
    margin: 0 auto;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        width: 86px;
        height: 86px;
    }
`;

export const PortfolioWarningWrapper = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    color: ${({ theme }) => theme.color.secondaryTextColor};
    margin: 88px 0 140px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 48px 0;
    }
`;

export const PortfolioWarningImage = styled.img`
    width: 37px;
    height: 34px;
`;

export const PortfolioWarning = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const PortfolioWarningText = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 17px;
        text-align: center;
    }
`;

export const PortfolioButton = styled.a`
    text-decoration: none;
    background: ${({ theme }) => theme.color.mainBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mainBlue};
    border-radius: 4%; 
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
`;

export const PortfolioTile = styled.div`
    background: ${({ theme }) => theme.color.secondaryBackground};
    padding: 24px;
    border: 6px solid ${({ theme }) => `${theme.color.primaryBorder}33`};
    border-radius: 4px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-gap: 24px;
    grid-auto-flow: row;
    box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};
    transition: border-color 0.3s ease-in-out;

    &:hover {
        border-color: ${({ theme }) => `${theme.color.mainBlue}33`};
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 24px;
        max-width: 600px;
        padding: 16px 24px;
        grid-gap: 16px;
    }
`;

export const PortfolioTileHeader = styled.h3`
    color: ${({ theme }) => theme.color.mainBlue};
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 16px;
    }
`;

export const PortfolioProjectDescription = styled.div`
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 18px;   
    font-weight: 400;
    margin-bottom: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
    }
`;

export const PortfolioTileLinks = styled.div``;

export const PortfolioTileLink = styled.a`
    color: ${({ theme }) => theme.color.mainBlue};
    font-size: 18px;
    padding: 0 5px;

    &:hover {
        filter: brightness(143%);
    }

    &:active {
        filter: brightness(156%);
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const PortfolioTileElement = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 18px;
    font-weight: 400;
    padding: 8px 5px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;