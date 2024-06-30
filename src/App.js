import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Navigation from "./Components/Layout/Navigation";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import ProductList from "./Components/Pages/ProductList";
import Product from "./Components/Pages/Product";
import Footer from "./Components/Layout/Footer";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/products" component={ProductList} />
        <Route path="/product/:id" component={Product} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
