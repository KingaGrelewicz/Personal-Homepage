import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
  body {
    font-family: "Inter", sans-serif;
    background: ${({ theme }) => theme.color.background};
  };
`;
