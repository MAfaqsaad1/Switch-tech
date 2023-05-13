import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Product from "./pages/product/Product";
import ProductDetails from "./pages/product/ProductDetails";
import Categories from "./pages/categories";
import Blogs from "./pages/blog";
import Quote from "./pages/quote";
import Brands from "./pages/brand";
import Navbar from "./navbar";
import Footer from "./footer";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails />
          </Route>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
