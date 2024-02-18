import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const SkillsWrapper = styled.div`
    max-width: 1216px;
    margin: 72px auto;
    background: ${({ theme }) => theme.color.secondaryBackground};
    box-shadow: 0px 16px 58px 0px ${({theme}) => `${theme.color.shadow}08`};

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 48px 16px;
    }
`;

export const SkillsTitle = styled.h2`
    color: ${({theme}) => theme.color.secondaryTextColor};
    margin: 0 32px 0 32px;
    padding: 32px 0 16px 0;
    font-size: 30px;
    font-weight: 900;
    border-bottom: 1px solid ${({ theme }) => theme.color.primaryBorder};
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 16px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 18px;
        padding: 12px 0;
        margin: 0 16px;
    }
`;

export const SkillsImage = styled.img`
    height: 24px;
    width: 24px;
`;

export const StyledSkillsList = styled.ul`
    padding: 0 0 32px 16px;
    margin: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    list-style-type: disc;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        padding: 12px 16px;
        margin: 0 16px;
    }
`;

export const SkillsListItem = styled.li`
    color: ${({ theme }) => theme.color.primaryTextColor};
    &::marker {
        color: ${({ theme }) => theme.color.mainBlue};
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;