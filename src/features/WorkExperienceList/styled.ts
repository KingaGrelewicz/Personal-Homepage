import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const WorkExperienceTitle = styled.h2`
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
