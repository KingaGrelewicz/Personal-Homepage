import styled, { keyframes } from "styled-components";
import { ReactComponent as PortfolioGitHubIcon } from "../../image/Github_black.svg";

export const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 592px);
    grid-gap: 32px;
    justify-content: center;
    margin: 72px 0 120px 0;
`;

export const PortfolioIcon = styled(PortfolioGitHubIcon)`
    display: flex;
    margin: 0 auto;
    fill: ${({ theme }) => theme.color.mainBlue};
`;

export const PortfolioHeader = styled.h2`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    margin: 12px 0 8px 0;
`;

export const PortfolioSubheader = styled.h3`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin: 8px 0 24px 0;
`;

export const PorftolioLoading = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
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
`;
export const PortfolioWarningWrapper = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    margin: 88px 0 140px 0;
`;
export const PortfolioWarningImage = styled.img`
    width: 37px;
    height: 34px;
`;

export const PortfolioWarning = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 16px;
`;

export const PortfolioWarningText = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 16px;
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
    background: ${({ theme }) => theme.color.background};
    padding: 24px;
    border: 6px solid ${({ theme }) => theme.color.iron};
    border-radius: 4px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-gap: 24px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
    }
`;

export const PortfolioTileHeader = styled.h3`
    color: ${({ theme }) => theme.color.mainBlue};
    font-size: 20px;
    margin-bottom: 8px;
`;

export const PortfolioProjectDescription = styled.div`
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 18px;   
    font-weight: 400;
    margin-bottom: 16px;
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

    &:focus {
        outline: none;
        border-radius: 1px;
        border: 3px solid ${({ theme }) => theme.color.anakiwa};
    }
`;

export const PortfolioTileElement = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 18px;
    font-weight: 400;
    padding: 8px 5px;
`;