import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalCss from "./styles/global.css.js";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
