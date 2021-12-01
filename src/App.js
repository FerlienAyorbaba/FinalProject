import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
//import Details from './pages/Details';
//import BooksDetails from './components/BooksDetails';
const App= () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
