import "./styles/App.scss";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
