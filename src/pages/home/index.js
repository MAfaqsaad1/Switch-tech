import React from "react";
import cardPattern from "../../assets/cardpattern.png";
import cardImg1 from "../../assets/p1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import centerImg from "../../assets/center.png";
import Brands from "../brand";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full py-6">
      <div className=" lg:px-36 px-5 w-full mx-auto md:pb-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-x-3 gap-y-3 md:gap-y-0 grid-cols-1 items-start w-full">
          <div className="grid md:grid-cols-3 lg:grid-cols-1 md:col-span-3 lg:col-span-1 gap-3 md:pt-3 lg:pt-0 h-full grid-flow-row gap-y-2 order-1 lg:order-0">
            <div
              className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
              style={{ backgroundImage: `url(${cardPattern})` }}
            >
              <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
                <div className="flex items-start flex-col">
                  <h1 className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900">
                    Routers
                  </h1>
                  <span className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white">
                    <Link className="hover:text-gray-200" to="/product">
                      Shop Now
                    </Link>
                  </span>
                </div>
                <span>
                  <img src={cardImg1} className=" " alt="" />
                </span>
              </div>
            </div>
            <div
              className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
              style={{ backgroundImage: `url(${cardPattern})` }}
            >
              <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
                <div className="flex items-start flex-col">
                  <h1 className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900">
                    Transceivers
                  </h1>
                  <span className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white">
                    <Link className="hover:text-gray-200" to="/product">
                      Shop Now
                    </Link>
                  </span>
                </div>
                <span>
                  <img src={img2} className=" " alt="" />
                </span>
              </div>
            </div>
            <div
              className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
              style={{ backgroundImage: `url(${cardPattern})` }}
            >
              <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
                <div className="flex items-start flex-col">
                  <h1 className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900">
                    NETWORK CABLES
                  </h1>
                  <span className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white">
                    <Link className="hover:text-gray-200" to="/product">
                      Shop Now
                    </Link>
                  </span>
                </div>
                <span>
                  <img src={img3} className=" " alt="" />
                </span>
              </div>
            </div>
          </div>
          <div
            id="hero"
            className="lg:col-span-2 md:col-span-3 h-72 lg:h-full text-white order-0 lg:order-1 w-full"
          >
            <div
              className="w-full not flex flex-col justify-center h-full md:px-8 px-4 py-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${centerImg})` }}
            >
              <span className="md:text-3xl text-xl font-bold leading-snug md:leading-tight w-full md:text-left block select-text">
                Offering variety on Networking Servers and Storages
              </span>
              <span className="text-sm leading-tight pt-4 font-light block select-text">
                Small Companies to Big Enterprise
              </span>
              <div className="flex space-x-3 mt-5 items-center not">
                <button
                  className="text-sm text-white px-7 py-2.5 hover:bg-secondry bg-transparent border hover:border-secondry hover:text-white"
                  aria-label="this is button"
                >
                  View Details
                </button>
                <button
                  className="text-sm text-white px-7 py-2.5 bg-secondry hover:bg-white hover:text-secondry"
                  aria-label="this is button"
                >
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y col-span-2 md:col-span-1 order-2 hidden h-full w-full lg:flex flex-col items-center divide-gray-700 divide-opacity-50 border border-gray-700 border-opacity-50 lg:p-5 p-3 py-4">
            <span className="uppercase w-full text-xs cursor-pointer hover:text-primary transition-all block lg:text-sm text-gray-700 py-3  select-text">
              Networking and Communication
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3  select-text">
              Power Devices
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              Consumer Electronics
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              Computer Accessories
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              Storage Devices
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              Memory
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              Printers and Print Supplies
            </span>
            <span className="uppercase w-full text-3xs cursor-pointer hover:text-primary transition-all block lg:text-2xs text-gray-700 py-3 select-text">
              System Components
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 pt-2 grid-cols-1 gap-3">
          <div
            className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
            style={{ backgroundImage: `url(${cardPattern})` }}
          >
            <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
              <div className="flex items-start flex-col">
                <h1 className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900">
                  Ram Modules
                </h1>
                <span className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white">
                  <Link className="hover:text-gray-200" to="/product">
                    Shop Now
                  </Link>
                </span>
              </div>
              <span>
                <img src={img4} className=" " alt="" />
              </span>
            </div>
          </div>
          <div
            className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
            style={{ backgroundImage: `url(${cardPattern})` }}
          >
            <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
              <div className="flex items-start flex-col">
                <h1
                  className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900"
                  href="/networking-and-communication/switches"
                >
                  network switches
                </h1>
                <span
                  className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white"
                  href="/networking-and-communication/switches"
                >
                  <Link className="hover:text-gray-200" to="/product">
                    Shop Now
                  </Link>
                </span>
              </div>
              <span>
                <img src={img5} className=" " alt="" />
              </span>
            </div>
          </div>
          <div
            className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
            style={{ backgroundImage: `url(${cardPattern})` }}
          >
            <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
              <div className="flex items-start flex-col">
                <h1
                  className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900"
                  href="/storage-devices/hard-disk-drives"
                >
                  Hard Disks Drives
                </h1>
                <span
                  className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white"
                  href="/storage-devices/hard-disk-drives"
                >
                  <Link className="hover:text-gray-200" to="/product">
                    Shop Now
                  </Link>
                </span>
              </div>
              <span>
                <img src={img6} className=" " alt="" />
              </span>
            </div>
          </div>
          <div
            className="flex items-center h-36    group hover:shadow-md transition-all cursor-pointer bg-cover bg-center bg-no-repeat shadow-sm"
            style={{ backgroundImage: `url(${cardPattern})` }}
          >
            <div className="w-full items-center justify-between grid grid-cols-2 gap-3 px-4">
              <div className="flex items-start flex-col">
                <h1
                  className="m-0 lg:text-sm md:text-xs text-2xs group-hover:text-primary uppercase font-semibold tracking-wider text-gray-900"
                  href="/storage-devices/solid-state-drives-(ssd)"
                >
                  Solid State Drives
                </h1>
                <span
                  className="text-2xs mt-3 cursor-pointer hover:bg-opacity-75 transition-all font-sans bg-primary lg:px-6 px-4 whitespace-nowrap py-1.5 rounded-sm text-white"
                  href="/storage-devices/solid-state-drives-(ssd)"
                >
                  <Link className="hover:text-gray-200" to="/product">
                    Shop Now
                  </Link>
                </span>
              </div>
              <span>
                <img src={img7} className=" " alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Brands />
    </div>
  );
}

export default Home;
