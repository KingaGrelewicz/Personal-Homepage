import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const FrontendSkillsWrapper = styled.section`
  margin: 12px auto;
  background: ${({ theme }) => theme.color.secondaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 12px 16px;
  }
`;

export const FrontendSkillsTitle = styled.h2`
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

export const FrontendSkillsImage = styled.img`
  height: 24px;
  width: 24px;
`;
