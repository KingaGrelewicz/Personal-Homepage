import { FcGraduationCap } from "react-icons/fc";
import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const EducationWrapper = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  background: ${({ theme }) => theme.color.secondaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-gap: 8px;
    margin: 12px 12px;
  }
`;

export const EducationTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-gap: 8px;
  }
`;

export const EducationIcon = styled(FcGraduationCap)`
  font-size: 30px;
  color: ${({ theme }) => theme.color.primaryTextColor};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 24px;
  }
`;

export const EducationTitle = styled.h2`
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

export const UniversityName = styled.h3`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 24px;
  font-weight: 600;
  margin: 12px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryBorder};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
    margin: 8px 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const EducationDate = styled.span`
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin: 0 32px;
  font-size: 24px;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
    margin: 8px 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const EducationDetails = styled.p`
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin: 0 32px;
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 20px;
    margin: 8px 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;
