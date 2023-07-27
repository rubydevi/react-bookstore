import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
