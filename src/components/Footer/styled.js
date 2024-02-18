import styled from "styled-components";
import { ReactComponent as GitHubIcone } from "../../image/Github_black.svg";
import { ReactComponent as LinkedInIcone } from "../../image/LinkedIN_black.svg";
import { ReactComponent as FacebookIcone } from "../../image/Facebook_black.svg";
import { mediaQuery } from "../../theme";

export const FooterWrapper = styled.div`
    margin: 24px auto;
    max-width: 1216px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 0 16px;
    }
`;

export const FooterParagraph = styled.p`
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
`;

export const FooterMail = styled.span`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 32px;
    font-weight: 900;

    &:hover {
        color: ${({ theme }) => theme.color.mainBlue};
        transition: 0.5s;
    }

    &:active {
        filter: brightness(150%);
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
       font-size: 18px; 
    }
`;

export const FooterContent = styled.div`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 18px;
    font-weight: 400;
    margin: 24px 0 56px 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
        margin: 12px 0;
    }
`;

export const FooterIcones = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    width: fit-content;
    margin-top: 56px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin: 40px 0;
    }
`;

export const FooterGitHubIcone = styled(GitHubIcone)`
    fill: ${({ theme }) => theme.color.secondaryTextColor};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.color.mainBlue};
    }

    &:active {
        filter: brightness(150%);
    }
`;

export const FooterLinkedInIcone = styled(LinkedInIcone)`
    fill: ${({ theme }) => theme.color.secondaryTextColor};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.color.mainBlue};
    }

    &:active {
        filter: brightness(150%);
    }
`;

export const FooterFacebookIcone = styled(FacebookIcone)`
    fill: ${({ theme }) => theme.color.secondaryTextColor};
    transition: fill 0.5s;
    
    &:hover {
        fill: ${({ theme }) => theme.color.mainBlue};
    }
`;