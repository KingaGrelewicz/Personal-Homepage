import styled from "styled-components";
import { mediaQuery } from "../../theme";

export const StyledHeader = styled.header`
  margin: 112px auto 0;

  @media (max-width: ${mediaQuery.breakpoints.mobileVertical}px) {
    margin: 16px 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobile}px) {
    margin: 12px 12px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
`;
