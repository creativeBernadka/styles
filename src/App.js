import "./styles/App.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TileSection from "./components/TileSection";
import JoinSection from "./components/JoinSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="container">
        <TileSection />
      </div>
      <div className="join-section">
        <div className="container">
          <JoinSection />
        </div>
      </div>
      <div className="testimonial-section">
        <div className="container">
          <TestimonialSection />
        </div>
      </div>
      <div className="container">
        <PricingSection />
      </div>
    </>
  );
}

export default App;
