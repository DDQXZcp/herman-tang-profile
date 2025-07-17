import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { IoTPage } from "./components/IoTPage/IoTPage";
import { PageLayout } from "./components/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><Main /></PageLayout>} />
        <Route path="/IoTPage" element={<PageLayout><IoTPage /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
