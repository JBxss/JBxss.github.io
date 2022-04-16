import { Suspense } from "react";

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
  return (
    <>
      <Suspense fallback={null}>
        <Config />
        <Header />
        <Nav />
        <About />
        <Experiences />
        <Services />
        <Portafolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
