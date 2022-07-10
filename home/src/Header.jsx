import React from "react";
import { Link } from 'react-router-dom'

import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'

const Header = () => (
 <header className="p-5 bg-blue-500 text-white text-2xl font-bold">
  <div className="flex">
    <div className="flex-grow flex align-center">
      <Link to="/">
        Fidget Spinner World
      </Link>

      <div className="mx-5">|</div>

      <Link to="/cart">
        Cart
      </Link>
    </div>

    <div className="flex-end relative">
      <MiniCart />
      <Login />
    </div>
  </div>
 </header>
);

export default Header
