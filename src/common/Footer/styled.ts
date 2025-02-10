import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const FooterWrapper = styled.footer`
  margin: 120px auto 0;
  max-width: 1216px;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    margin: 120px 12px 0;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 0 16px;
  }
`;

export const FooterParagraph = styled.h2`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 12px;
  font-weight: 700;
`;

export const FooterMail = styled.a`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.mainBlue};
    transition: 0.5s;
  }

  &:active {
    filter: brightness(150%);
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const FooterContent = styled.p`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: 18px;
  font-weight: 400;
  margin: 24px 0 56px 0;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
    margin: 12px 0;
  }
`;
