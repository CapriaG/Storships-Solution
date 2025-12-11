import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import Services from "./sections/Services";
import CalculatorSection from "./sections/CalculatorSection";
import CustomSection from "./sections/CustomSection";
import GuaranteeSection from "./sections/GuaranteeSection";
import Questions from "./sections/Questions";
import './styles/global.css';
import FloatingButtons from "./components/FloatingButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="calculator">
          <CalculatorSection />
        </section>
        <section id="custom">
          <CustomSection />
        </section>
        <section id="custom">
          <GuaranteeSection />
        </section>
        <section id="questions">
          <Questions />
        </section>
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;
