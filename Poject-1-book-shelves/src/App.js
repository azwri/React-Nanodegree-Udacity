import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
