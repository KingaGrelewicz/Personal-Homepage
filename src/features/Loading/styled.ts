import styled, { keyframes } from "styled-components";
import { mediaQuery } from "../../theme";

export const LoadingWrapper = styled.p`
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

export const LoadingSpinner = styled.img`
    animation: ${rotate360} 1s linear infinite;
    display: flex;
    margin: 0 auto;
    height: auto;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        width: 86px;
        height: 86px;
    }
`;
