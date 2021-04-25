import "./styles/App.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TileSection from "./components/TileSection";
import JoinSection from "./components/JoinSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
