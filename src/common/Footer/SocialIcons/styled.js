import styled from "styled-components";
import { mediaQuery } from "../../../theme";

export const SocialList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 56px;
    margin-bottom: 0;
    padding: 0;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin-top: 40px;
    }
`;

export const SocialItem = styled.li`
    &:not(:last-child) {
        margin-right: 24px;
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        margin-right: 16px;
    }
`;

export const SocialLink = styled.a`
    fill: ${({ theme }) => theme.color.secondaryTextColor};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.color.mainBlue};
    }

    &:active {
        filter: brightness(150%);
    }`;

export const styleIcon = Icon => styled(Icon) `
    height: auto;

    @media(max-width: ${mediaQuery.breakpoints.mobile}px) {
        width: 32px;
    }
`;
