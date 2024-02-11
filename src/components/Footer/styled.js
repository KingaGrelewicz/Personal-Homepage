import styled from "styled-components";
import { ReactComponent as GitHubIcone } from "../../image/Github_black.svg";
import { ReactComponent as LinkedInIcone } from "../../image/LinkedIN_black.svg";
import { ReactComponent as FacebookIcone } from "../../image/Facebook_black.svg";

export const FooterWrapper = styled.div`
    margin: 0 auto;
    max-width: 1216px;
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

`;

export const FooterContent = styled.div`
    color: ${({ theme }) => theme.color.secondaryTextColor};
    font-size: 18px;
    font-weight: 400;
    margin-top: 24px;
`;

export const FooterIcones = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    width: fit-content;
    margin-top: 56px;
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

    &:active {
        filter: brightness(150%);
    }
`;