import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const SkillsTitle = styled.h2`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  padding: 16px;
  margin: 12px 0;
  font-size: 30px;
  font-weight: 900;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 20px;
    margin: 0;
  }
`;

export const SkillsWrapper = styled.section`
  margin: 12px auto;
  background: ${({ theme }) => theme.color.secondaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};
  padding: 12px 0;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 12px 16px;
  }
`;

export const SkillsHeader = styled.h3`
  color: ${({ theme }) => theme.color.secondaryTextColor};
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

export const StyledSkillsList = styled.ul`
  padding: 16px;
  margin: 12px 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 160px;
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

export const SkillsItem = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primaryTextColor};
  &::marker {
    color: ${({ theme }) => theme.color.mainBlue};
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
