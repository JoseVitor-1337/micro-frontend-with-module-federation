import React from "react";
import ReactDOM from "react-dom";

import Header from './Header'
import Footer from './Footer'

import MainLayout from './MainLayout'

import "remixicon/fonts/remixicon.css"

import "./index.scss";

const App = () => (
  <MainLayout />
);

ReactDOM.render(<App />, document.getElementById("app"));
