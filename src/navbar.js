import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

import { useCart } from "react-use-cart";

function Navbar() {
  const { items } = useCart();
  const phoneNumber = "+923084886911";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <>
      <Link
        to="/quote"
        class="fixed right-0 z-50 translate-y-96 transform cursor-pointer select-none"
        href="/request-a-quote"
      >
        <div class="flex items-center bg-primary p-3 space-x-2">
          <i class="fa-solid fa-cart-shopping text-white"></i>
          <span className="text-white">(0) {items.price} </span>
        </div>
      </Link>
      <div className="flex items-center md:px-36 px-5 py-5 justify-between">
        <div className="logo h-12  ">
          <img src={logo} alt="" srcset="" className="h-full object-cover" />
        </div>
        <div className="catagory hidden xl:block ">
          <div className="flex  md:col-span-2 justify-between px-4 bg-opacity-10 bg-gray-500">
            <select
              name="selected"
              className="text-2xs w-full text-gray-900 bg-transparent outline-none cursor-pointer py-2"
              id="selected"
            >
              <option value="">All Category</option>
              <option className="pr-20" value="">
                Networking and Communication
              </option>
              <option value="">&nbsp;&nbsp;&nbsp;Network Accessories</option>
              <option value="">
                &nbsp;&nbsp;&nbsp;Concentrators and Multiplexers
              </option>
              <option value="">&nbsp;&nbsp;&nbsp;Transceivers</option>
              <option value="">&nbsp;&nbsp;&nbsp;Network Cables</option>
              <option value="">
                &nbsp;&nbsp;&nbsp;DVD Players and Recorders
              </option>
              <option value="">&nbsp;&nbsp;&nbsp;Repeaters</option>
              <option value="">&nbsp;&nbsp;&nbsp;Telephones</option>
              <option value="">&nbsp;&nbsp;&nbsp;Network Adapters</option>
              <option value="">&nbsp;&nbsp;&nbsp;Network Devices</option>
              <option value="">&nbsp;&nbsp;&nbsp;Bridges</option>
              <option value="">&nbsp;&nbsp;&nbsp;Switches</option>
              <option value="">&nbsp;&nbsp;&nbsp;Printer Servers</option>
              <option value="">&nbsp;&nbsp;&nbsp;Server Barebones</option>
              <option value="">&nbsp;&nbsp;&nbsp;Servers</option>
              <option value="">&nbsp;&nbsp;&nbsp;Routers</option>
              <option value="">&nbsp;&nbsp;&nbsp;Modems</option>
              <option value="">&nbsp;&nbsp;&nbsp;Hubs</option>
            </select>
          </div>
        </div>
        <div className="search hidden lg:block">
          <div className="flex items-center py-2 ">
            <input
              type="search"
              placeholder="search"
              className="outline-none px-2 py-2 lg:w-80 border-2"
              name=""
              id=""
            />
            <div className="bg-primary flex justify-center items-center py-2 px-4 cursor-pointer ">
              &#128269;
            </div>
          </div>
        </div>
        <div className="call border-spacing-2 hidden sm:block hover:bg-primary hover:text-white transition-all border-2 px-8 py-2 border-primary">
          <a href={`tel:${phoneNumber}`} onClick={handleCall}>
            {" "}
            Call Us Now
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="divide-y lg:divide-none  bg-primary uppercase py-3 lg:py-5   overflow-hidden w-full text-white flex flex-col lg:flex-row items-center lg:space-x-10 justify-center">
          <Link className="hover:text-gray-200" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-200" to="/about">
            About Us
          </Link>
          <Link className="hover:text-gray-200" to="/brands">
            Brands
          </Link>
          <Link className="hover:text-gray-200" to="/product">
            Product
          </Link>
          <Link className="hover:text-gray-200" to="/Categories">
            CATEGORIES
          </Link>
          <Link className="hover:text-gray-200" to="/blogs">
            blogs
          </Link>
          <Link className="hover:text-gray-200" to="/quote">
            REQUEST A QUOTE
          </Link>
          <Link className="hover:text-gray-200" to="/contact">
            contact us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
