import { IoClose } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { mediaQuery } from "../../theme";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface StyledMenuNavProps {
  $state: "entering" | "entered" | "exiting" | "exited" | "unmounted";
}

export const MenuNavWrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
`;

export const StyledMenuNav = styled.div<StyledMenuNavProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 500px;
  background-color: ${({ theme }) => theme.color.primaryBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};
  animation: ${({ $state }) =>
      $state === "entering" ? slideIn : $state === "exiting" ? slideOut : "none"}
    500ms forwards;
  z-index: 3;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    width: 300px;
  }
`;

export const MenuNavBackground = styled.div<StyledMenuNavProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 550px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => `${theme.color.shadow}08`};
  animation: ${({ $state }) =>
      $state === "entering" ? slideIn : $state === "exiting" ? slideOut : "none"}
    400ms forwards;
  z-index: 2;

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    width: 350px;
  }
`;

export const CloseButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: end;
  margin: 24px;
  font-size: 24px;
  color: ${({ theme }) => theme.color.secondaryTextColor};
`;

export const CloseIcon = styled(IoClose)`
  &:hover {
    animation: ${rotate360} 0.8s ease-in-out infinite;
  }
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  margin: 42px 0;
`;

export const NavigationLink = styled.li`
  padding: 10px 20px;
  text-align: left;
  font-size: 24px;
  font-weight: 400;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.mainBlue};

    &:hover {
      filter: brightness(120%);
    }

    &:active {
      filter: brightness(150%);
    }
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;
