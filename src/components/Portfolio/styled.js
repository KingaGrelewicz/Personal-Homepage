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
    fill: ${({ theme }) => theme.color.scienceBlue};
`;

export const PortfolioHeader = styled.h2`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    margin: 12px 0 8px 0;
`;

export const PortfolioSubheader = styled.h3`
    color: ${({ theme }) => theme.color.mineShaft};
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
    background: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.scienceBlue};
    border-radius: 4%; 
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
`;

export const PortfolioTile = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 16px;
    border: 6px solid ${({theme}) => theme.color.iron};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03);

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
    }
`;

export const PortfolioTileHeader = styled.h3`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 20px;
    margin-bottom: 8px;
`;

export const PortfolioProjectDescription = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;   
    font-weight: 400;
    padding: 24px;
    margin-bottom: 16px;
`;

export const PortfolioTileLinks = styled.div`

`;

export const PortfolioTileLink = styled.a`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 18px;
    padding: 0 5px;
`;

export const PortfolioTileElement = styled.div`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    font-weight: 400;
    padding: 8px 5px;
`;