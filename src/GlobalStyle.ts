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
    transition: background 0.3s;
    background: ${({ theme }) => theme.color.primaryBackground};
    letter-spacing: 0.05em;
  };
`;
