import React from "react";

import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

const Header = () => (
 <header className="p-5 bg-blue-500 text-white text-2xl font-bold">
  <div className="flex">
    <div className="flex-grow">
      <h1>Fidget Spinner World</h1>
    </div>

    <div className="flex-end relative">
      <MiniCart />
      <Login />
    </div>
  </div>
 </header>
);

export default Header
