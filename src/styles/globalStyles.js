import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.font_color};
        transition: var(--transition);
    }
    
    .text-light {
    color: ${({ theme }) => theme.text_theme};
    transition: var(--transition);
    }
`;

export const lightTheme = {
  body: "var(--color-bg-light)",
  font_color: "var(--color-black)",
  text_theme: "var(--color-dark)"
};

export const darkTheme = {
  body: "var(--color-bg)",
  fontColor: "var(--color-white)",
  text_theme: "var(--color-light)"
};
