import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ fontFamily: "Poppins,sans-serif" }}>
      <Router>
        <Routes>
          <Route path="" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
