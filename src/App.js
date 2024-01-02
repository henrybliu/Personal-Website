import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about";
import Footer from "./components/footer";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import Portfolio from "./pages/portfolio";

import "./App.css";

function App() {
  return (
    <Router className="router">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="appContent">
              <Home />
              <Portfolio />
              <About />
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
