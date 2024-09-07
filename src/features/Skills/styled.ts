import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const SkillsWrapper = styled.section`
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