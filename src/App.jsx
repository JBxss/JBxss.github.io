import { Suspense } from "react";
import { ThemeProvider } from "styled-components";

//Styles
import { UseDarkMode } from "./styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";

// Componentes
import Header from "./components/header/header";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Experiences from "./components/experience/experience";
import Services from "./components/services/services";
import Portafolio from "./components/portafolio/portafolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Config from "./components/config/config";

const App = () => {
  const [theme, toggleTheme] = UseDarkMode();

  return (
    <>
      <Suspense fallback={null}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Config theme={theme} toggleTheme={toggleTheme} />
          <Header />
          <Nav />
          <About />
          <Experiences />
          <Services />
          <Portafolio />
          <Testimonials />
          <Contact />
          <Footer />
        </ThemeProvider>
      </Suspense>
    </>
  );
};

export default App;
