import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const ErrorWarningWrapper = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    color: ${({ theme }) => theme.color.secondaryTextColor};
    margin: 88px 0 140px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 48px 0;
    }
`;

export const ErrorWarningImage = styled.img`
    width: 37px;
    height: 34px;
`;

export const ErrorWarning = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const ErrorWarningText = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 17px;
        text-align: center;
    }
`;

export const ErrorButton = styled.a`
    text-decoration: none;
    background: ${({ theme }) => theme.color.mainBlue};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mainBlue};
    border-radius: 4%; 
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 600;
`;