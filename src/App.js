import "./App.css";
import React, { useEffect, useState } from "react";
import AddData from "./components/AddData";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShowData from "./components/ShowData";

function App() {
  
  
  return (
  <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ShowData />} />
          {/* <Route path="/AddData" element={<AddData/>} /> */}
     
        </Routes>
      </BrowserRouter>
  </div> 
  );
}

export default App;
