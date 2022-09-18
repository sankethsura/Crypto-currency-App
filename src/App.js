import "./App.css";
import * as React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import { useState } from "react";
import Top from "./pages/Topbar";
function App() {
  // console.log(data)
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState("inr");
  
  return (
    <div className="App">
      <div className="fixed shadow2"><Top /></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={data} setData={setData} currency={currency} setCurrency={setCurrency}/>} />
          <Route path="/detail/:id" element={
          <Details data={data} currency={currency} setCurrency={setCurrency}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
