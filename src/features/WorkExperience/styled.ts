import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const ExperienceWrapper = styled.section`
  margin: 12px auto;
  padding: 12px 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  background: ${({ theme }) => theme.color.secondaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    margin: 12px 20px;
    padding: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 12px;
    padding: 12px;
  }
`;

export const CompanyName = styled.h2`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryBorder};
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding: 16px 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;

export const JobPosition = styled.h3`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const JobDuration = styled.span`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 24px;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const JobResponsibilities = styled.div`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 24px;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;
