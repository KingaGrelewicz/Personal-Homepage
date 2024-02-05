import styled from "styled-components";
import { ReactComponent as PortfolioGitHubIcone } from "../../image/Github_black.svg";

export const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 592px);
    grid-gap: 32px;
    justify-content: center;
`;

export const PortfolioIcone = styled(PortfolioGitHubIcone)`
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

export const PortfolioTile = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 16px;
    border: 6px solid ${({theme}) => theme.color.iron};
    border-radius: 4px;
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
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    font-weight: 400;
    padding: 8px 5px;
`;

export const PortfolioTileLink = styled.a`
    display: block;
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 18px;
    padding: 0 5px;
`;