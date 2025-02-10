import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const FrontendStyledSkillsList = styled.ul`
  padding: 16px;
  margin: 12px 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  list-style-type: disc;
  line-height: 25px;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 16px;
    padding: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin: 24px;
    padding: 0 12px;
  }
`;

export const FrontendSkillsListItem = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primaryTextColor};
  &::marker {
    color: ${({ theme }) => theme.color.mainBlue};
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
