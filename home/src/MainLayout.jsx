import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from 'home/Header'
import Footer from 'home/Footer'
import PDPContent from 'pdp/PDPContent'
import HomeContent from 'home/HomeContent'
import CartContent from 'cart/CartContent'

import "remixicon/fonts/remixicon.css"
import "./index.scss";

const MainLayout = () => (
  <BrowserRouter>
    <main className="text-2xl mx-auto max-w-6xl">
      <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </div>
      <Footer /> 
    </main>
  </BrowserRouter>
  
);

export default MainLayout
