import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.color};
        transition: var(--transition);
      }

    section > h5 {
    color: ${({ theme }) => theme.theme};
    }
    
    .text-light {
    color: ${({ theme }) => theme.theme};
    }

    .btn:hover {
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.bg};
    }

  a:hover {
    color: ${({ theme }) => theme.color};
  }

  .btn-primary {
    color: ${({ theme }) => theme.bg};
  }

  nav a {
    color: ${({ theme }) => theme.theme};
  }

  .about__card {
    background: ${({ theme }) => theme.variant};
  }

  .about__card small {
    color: ${({ theme }) => theme.theme};
  }

  .about__content p {
  color: ${({ theme }) => theme.theme};
  }

  .experience__container > div {
    background: ${({ theme }) => theme.variant};
  }

  .service {
    background: ${({ theme }) => theme.variant};
  }

  .service__head h3 {
    color: ${({ theme }) => theme.bg};
}

  .portafolio__item {
    background: ${({ theme }) => theme.variant};
  }

  .testimonial {
  background: ${({ theme }) => theme.variant};
  }

  .client__review {
    color: ${({ theme }) => theme.theme};
  }

  .contact__option {
    background: ${({ theme }) => theme.variant};
  }

  .contact__option h5 {
    color: ${({ theme }) => theme.theme};
  }

  input, textarea {
    color: ${({ theme }) => theme.color};
  }

  footer a {
    color: ${({ theme }) => theme.bg};
  }

  .footer__copyright {
    color: ${({ theme }) => theme.bg};
  }

`;

export const lightTheme = {
  bg: "var(--color-bg-light)",
  color: "var(--color-black)",
  theme: "var(--color-dark)",
  variant: "var(--color-bg-light-variant)"
};

export const darkTheme = {
  bg: "var(--color-bg)",
  color: "var(--color-white)",
  theme: "var(--color-light)",
  variant: "var(--color-bg-variant)"
};
