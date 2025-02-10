import styled from "styled-components";
import { ReactComponent as PortfolioGitHubIcon } from "../../image/Github_black.svg";
import { mediaQuery } from "../../theme";

export const FrontendTitle = styled.h2`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  padding: 16px;
  margin: 12px 0;
  font-size: 30px;
  font-weight: 900;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 20px;
    margin: 0;
  }
`;

export const PortfolioIcon = styled(PortfolioGitHubIcon)`
  width: 40px;
  height: 40px;
  display: flex;
  margin: 12px auto;
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
