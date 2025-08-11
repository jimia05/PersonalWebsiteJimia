import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useState } from "react";
import NotFound from "./Pages/NotFound";
import ProjectDetails from "./Pages/ProjectDetails"; // <-- Add this import

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<ProjectDetails />} /> {/* <-- Add this route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
