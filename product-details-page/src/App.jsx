import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from 'home/Header'
import Footer from 'home/Footer'
import PDPContent from './PDPContent'

import "remixicon/fonts/remixicon.css"
import "./index.scss";

const App = () => (
  <BrowserRouter>
    <main className="text-2xl mx-auto max-w-6xl">
      <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
      <Footer /> 
    </main>
  </BrowserRouter>
  
);

ReactDOM.render(<App />, document.getElementById("app"));
