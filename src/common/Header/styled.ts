import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../image/message.svg";
import { mediaQuery } from "../../theme";

export const StyledHeader = styled.header`
  margin: 112px auto 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    margin: 64px 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 32px 16px;
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const HeaderImage = styled.img`
  width: 30vw;
  max-width: 250px;
  border-radius: 10%;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    width: 132px;
    margin-left: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    width: 128px;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: 38px;
  font-weight: 900;
  margin: 12px 0 12px 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 32px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 22px;
  }
`;

export const HeaderContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primaryTextColor};
  padding: 12px;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 18px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const HeaderButton = styled.a`
  width: fit-content;
  text-decoration: none;
  background: ${({ theme }) => theme.color.mainBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => `${theme.color.primaryBorder}3`};
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  align-items: center;
  margin-top: 32px;
  transition: color 0.5s;

  &:hover {
    outline: none;
    filter: brightness(120%);
    box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.color.hoverBorder};
  }

  &:active {
    filter: brightness(150%);
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin-top: 24px;
  }
`;

export const HeaderMailIcon = styled(MailIcon)`
  stroke: ${({ theme }) => theme.color.white};
`;
