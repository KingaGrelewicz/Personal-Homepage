import styled from "styled-components";
import { mediaQuery } from "../../theme";
import { ReactComponent as MailIcon } from "../../image/message.svg";

export const AboutTitle = styled.h2`
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

export const AboutWrapper = styled.div`
  margin: 12px auto;
  padding: 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 32px;
  background: ${({ theme }) => theme.color.secondaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const AboutImage = styled.img`
  width: 30vw;
  height: auto;
  max-width: 265px;
  border-radius: 10%;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    min-width: 132px;
    margin-left: 12px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    min-width: 128px;
  }
`;

export const AboutContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.primaryTextColor};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 18px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const AboutName = styled.h1`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: 38px;
  font-weight: 900;
  margin: 12px 0 12px 0;
  padding: 0 0 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryBorder};

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    font-size: 32px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 22px;
  }
`;

export const AboutButton = styled.a`
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

export const AboutMailIcon = styled(MailIcon)`
  stroke: ${({ theme }) => theme.color.white};
`;
