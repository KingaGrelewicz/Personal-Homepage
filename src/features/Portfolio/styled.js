import styled from "styled-components";
import { ReactComponent as PortfolioGitHubIcon } from "../../image/Github_black.svg";
import { mediaQuery } from "../../theme";

export const ProjectWrapper = styled.div`
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

export const ProjectTile = styled.div`
    background: ${({ theme }) => theme.color.secondaryBackground};
    padding: 56px;
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
        margin: 0 16px;
        grid-gap: 16px;
        padding: 24px;
    }
`;

export const ProjectTileHeader = styled.h3`
    color: ${({ theme }) => theme.color.mainBlue};
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 16px;
    }
`;

export const ProjectDescription = styled.div`
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

export const ProjectTileLinks = styled.div``;

export const ProjectTileLink = styled.a`
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

export const ProjectTileElement = styled.div`
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