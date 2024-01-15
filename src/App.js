import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./sections/about";
import Footer from "./components/footer";
import Home from "./sections/home";
import NavBar from "./components/navBar";
import Portfolio from "./sections/portfolio";

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
        <Route path="/cohere" />
        <Route path="/ECETutor" />
        <Route path="/scripps" />
        <Route path="/viasat2023" />
        <Route path="/viasat2022" />
        <Route path="/paloVerde" />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
