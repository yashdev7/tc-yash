import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hhh from "./components/Hhh";

function App() {
  return (
    <div style={{ fontFamily: "Poppins,sans-serif" }}>
      <Router>
        <Routes>
          <Route path="" element={<Navbar />} />
          <Route path="/navbar" element={<Hhh />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
