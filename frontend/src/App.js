import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

 export  default App