import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="*" element={<AuthPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
