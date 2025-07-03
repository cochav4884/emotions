import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Anger from "./pages/Anger";
import Anxiety from "./pages/Anxiety";
import Awesome from "./pages/Awesome";
import Bothered from "./pages/Bothered";
import Confused from "./pages/Confused";
import Depressed from "./pages/Depressed";
import Embarrassed from "./pages/Embarrassed";
import Happy from "./pages/Happy";
import Irritated from "./pages/Irritated";
import Lost from "./pages/Lost";
import Love from "./pages/Love";
import Negative from "./pages/Negative";
import Neutral from "./pages/Neutral";
import Pain from "./pages/Pain";
import Positive from "./pages/Positive";
import Rage from "./pages/Rage";
import Relaxed from "./pages/Relaxed";
import Sad from "./pages/Sad";
import Undecided from "./pages/Undecided";
import Upset from "./pages/Upset";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anger" element={<Anger />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/awesome" element={<Awesome />} />
            <Route path="/bothered" element={<Bothered />} />
            <Route path="/confused" element={<Confused />} />
            <Route path="/depressed" element={<Depressed />} />
            <Route path="/embarrassed" element={<Embarrassed />} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/irritated" element={<Irritated />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/love" element={<Love />} />
            <Route path="/negative" element={<Negative />} />
            <Route path="/neutral" element={<Neutral />} />
            <Route path="/pain" element={<Pain />} />
            <Route path="/positive" element={<Positive />} />
            <Route path="/rage" element={<Rage />} />
            <Route path="/relaxed" element={<Relaxed />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/undecided" element={<Undecided />} />
            <Route path="/upset" element={<Upset />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
