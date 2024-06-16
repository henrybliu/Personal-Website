import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

import { Home, About, Portfolio } from "./sections";

import { Footer, NavBar, FooterFadeInSection } from "./components";

import {
  Cohere,
  Amazon,
  ECETutor,
  Scripps,
  Viasat2022,
  Viasat2023,
  PaloVerde,
} from "./experiencePages";

import {
  Sprout,
  TicTacToeModel,
  MyWebsite,
  HenrysBarbershop,
  ThetaTauWebsite,
  PredictingCVD,
  Bitcoin,
  FloWeaver,
  Leetcode,
  InstagramUnfollowers,
  TarotCardGame,
  Everglow,
  WhackAMole,
} from "./projectPages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router className="router">
      <NavBar />
      <ScrollToTop />

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

        {/* routes for project pages */}
        <Route path="/sprout" element={<Sprout />} />
        <Route path="/ticTacToeModel" element={<TicTacToeModel />} />
        <Route path="/aboutMyWebsite" element={<MyWebsite />} />
        <Route path="/henrysBarbershop" element={<HenrysBarbershop />} />
        <Route path="/thetaTauWebsite" element={<ThetaTauWebsite />} />
        <Route path="/predictingCVD" element={<PredictingCVD />} />
        <Route path="/bitcoinHash&amp;Miner" element={<Bitcoin />} />
        <Route path="/floWeaver" element={<FloWeaver />} />
        <Route path="/leetcode" element={<Leetcode />} />
        <Route
          path="/instagramUnfollowers"
          element={<InstagramUnfollowers />}
        />
        <Route path="/tarotCardGame" element={<TarotCardGame />} />
        <Route path="/everglow" element={<Everglow />} />
        <Route path="/whackAMole" element={<WhackAMole />} />

        {/* routes for experience pages */}
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/cohere" element={<Cohere />} />
        <Route path="/ECETutor" element={<ECETutor />} />
        <Route path="/scripps" element={<Scripps />} />
        <Route path="/viasat2023" element={<Viasat2023 />} />
        <Route path="/viasat2022" element={<Viasat2022 />} />
        <Route path="/paloVerde" element={<PaloVerde />} />
      </Routes>
      <FooterFadeInSection>
        <Footer />
      </FooterFadeInSection>
    </Router>
  );
}

export default App;
