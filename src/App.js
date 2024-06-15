import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

// sections
import About from "./sections/about";
import Footer from "./components/footer";
import Home from "./sections/home";
import NavBar from "./components/navBar";
import Portfolio from "./sections/portfolio";
import FooterFadeInSection from "./components/footerFadeIn";

//experience pages
import Cohere from "./experiencePages/cohere";
import Amazon from "./experiencePages/amazon";
import ECETutor from "./experiencePages/ECETutor";
import Scripps from "./experiencePages/scripps";
import Viasat2023 from "./experiencePages/viasat2023";
import Viasat2022 from "./experiencePages/viasat2022";
import PaloVerde from "./experiencePages/paloVerde";

// project pages
import Sprout from "./projectPages/sprout";
import TicTacToeModel from "./projectPages/ticTacToeModel";
import MyWebsite from "./projectPages/myWebsite";
import HenrysBarbershop from "./projectPages/henrysBarbershop";
import ThetaTauWebsite from "./projectPages/thetaTauWebsite";
import PredictingCVD from "./projectPages/predictingCVD";
import Bitcoin from "./projectPages/bitcoin";
import FloWeaver from "./projectPages/floWeaver";
import Leetcode from "./projectPages/leetcode";
import InstagramUnfollowers from "./projectPages/instagramUnfollowers";
import TarotCardGame from "./projectPages/tarotCardGame";
import Everglow from "./projectPages/everglow";
import WhackAMole from "./projectPages/whackAMole";

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
