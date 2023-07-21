// App.js
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar'; // Change the import statement to use a named import
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
