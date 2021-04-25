import "./styles/App.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TileSection from "./components/TileSection";

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
    </div>
  );
}

export default App;
