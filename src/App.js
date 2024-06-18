import React, { useEffect } from "react";
import { GlobalStyles } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Home, About, Portfolio } from "./sections";

import { Footer, NavBar } from "./components";

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

const globalStyles = (
  <GlobalStyles
    styles={{
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        textDecoration: "none",
      },
    }}
  />
);

const projectRoutes = [
  { path: "/sprout", element: <Sprout /> },
  { path: "/ticTacToeModel", element: <TicTacToeModel /> },
  { path: "/aboutMyWebsite", element: <MyWebsite /> },
  { path: "/henrysBarbershop", element: <HenrysBarbershop /> },
  { path: "/thetaTauWebsite", element: <ThetaTauWebsite /> },
  { path: "/predictingCVD", element: <PredictingCVD /> },
  { path: "/bitcoinHash&miner", element: <Bitcoin /> },
  { path: "/floWeaver", element: <FloWeaver /> },
  { path: "/leetcode", element: <Leetcode /> },
  { path: "/instagramUnfollowers", element: <InstagramUnfollowers /> },
  { path: "/tarotCardGame", element: <TarotCardGame /> },
  { path: "/everglow", element: <Everglow /> },
  { path: "/whackAMole", element: <WhackAMole /> },
];

const experienceRoutes = [
  { path: "/amazon", element: <Amazon /> },
  { path: "/cohere", element: <Cohere /> },
  { path: "/ECETutor", element: <ECETutor /> },
  { path: "/scripps", element: <Scripps /> },
  { path: "/viasat2023", element: <Viasat2023 /> },
  { path: "/viasat2022", element: <Viasat2022 /> },
  { path: "/paloVerde", element: <PaloVerde /> },
];

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
      {globalStyles}
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

        {projectRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {experienceRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
