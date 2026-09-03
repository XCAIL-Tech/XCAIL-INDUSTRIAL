import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { Services } from "./components/Services";
import { OutsourcingCta } from "./components/OutsourcingCta";
import { Process } from "./components/Process";
import { WhyIndustrial } from "./components/WhyIndustrial";
import { IndustryTech } from "./components/IndustryTech";
import { Company } from "./components/Company";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import AvisoLegal from "./pages/AvisoLegal";
import Faq from "./pages/Faq";
import Agendar from "./pages/Agendar";
import { useCalInit } from "./lib/cal";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Services />
      <OutsourcingCta />
      <Process />
      <IndustryTech />
      <WhyIndustrial />
      <Company />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  useCalInit();

  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas independientes — antes del catch-all */}
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="/agendar" element={<Agendar />} />
        {/* Landing — catch-all: /, /servicios, /proceso, /empresa, /contacto */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
