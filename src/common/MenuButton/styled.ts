import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

export const MenuButtonStyled = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.primaryTextColor};
  border: none;
  padding: 8px;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(150%);
  }
`;

export const MenuIcon = styled(IoMenu)`
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 36px;
`;
