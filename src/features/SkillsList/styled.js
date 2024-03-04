import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const StyledSkillsList = styled.ul`
    padding: 0 0 32px 16px;
    margin: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    list-style-type: disc;
    line-height: 25px;

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        padding: 12px 16px;
        margin: 0 16px;
    }
`;

export const SkillsListItem = styled.li`
    font-size: 18px;
    color: ${({ theme }) => theme.color.primaryTextColor};
    &::marker {
        color: ${({ theme }) => theme.color.mainBlue};
    }

    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;