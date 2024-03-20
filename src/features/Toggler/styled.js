import styled from "styled-components";
import { mediaQuery } from "../../theme";
import { ReactComponent as ModeIcon } from "../../image/modeIcon.svg";

export const HeaderToggleMode = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: end;
    grid-gap: 12px;
    padding: 15px;
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 12px;
    font-weight: 700;
    
    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        grid-template-columns: auto;
    }
`;

export const HeaderTogglerLabel = styled.span`
    @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
        display: none;
    }
`;

export const HeaderToggler = styled.button`
    cursor: pointer;
    height: 26px;
    width: 48px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.color.primaryBorder};
    background: ${({ theme }) => theme.color.togglerBackground};
    display: flex;
    align-items: center;
    padding: 3px;
    margin: -5px; 
`;

export const HeaderTogglerIcon = styled.div`
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    background: ${({ theme }) => theme.color.primaryTextColor};
    transition: 0.7s;
    transform: ${({ $isDarkTheme }) => ($isDarkTheme
        ? 'translateX(100%) rotate(180deg)'
        : 'translateX(0%) rotate(0deg)'
    )};
`;

export const HeaderModeIcon = styled(ModeIcon)`
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.secondaryBackground};
`;