import styled from "styled-components";
import { mediaQuery } from "../../../theme";

export const TileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  justify-content: center;
  margin: 24px 0 120px 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    margin: 20px 16px;
  }
`;
export const TileRepo = styled.div`
  background: ${({ theme }) => theme.color.secondaryBackground};
  padding: 40px;
  border: 6px solid ${({ theme }) => `${theme.color.primaryBorder}33`};
  border-radius: 4px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 24px;
  grid-auto-flow: row;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => `${theme.color.mainBlue}33`};
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 0 16px;
    grid-gap: 16px;
    padding: 24px;
  }
`;

export const TileHeader = styled.h3`
  color: ${({ theme }) => theme.color.mainBlue};
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const TileDescription = styled.p`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const TileLinks = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const TileLink = styled.a`
  color: ${({ theme }) => theme.color.mainBlue};
  font-size: 18px;
  padding: 0 5px;

  &:hover {
    filter: brightness(143%);
  }

  &:active {
    filter: brightness(156%);
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const TileElement = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: 18px;
  font-weight: 400;
  padding: 8px 5px;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
