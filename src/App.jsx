import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Aboutus from './Pages/Aboutus';
import Cart from './Components/Collection/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Footer from './Components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen("true");
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="z-10">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      <Cart
        cartItems={cartItems}
        isOpen={isCartOpen}
        closeCart={closeCart}
      />
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
