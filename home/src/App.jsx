import React from "react";
import ReactDOM from "react-dom";

import HomeContent from './HomeContent'
import Header from './Header'
import Footer from './Footer'

import "remixicon/fonts/remixicon.css"

import "./index.scss";

const App = () => (
  <main className="text-2xl mx-auto max-w-6xl">
    <Header />
      <div className="my-10">
        <HomeContent />
      </div>
    <Footer /> 
  </main>
);

ReactDOM.render(<App />, document.getElementById("app"));
