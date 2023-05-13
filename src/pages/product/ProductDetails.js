import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/data";

import { useState } from "react";
import { useCart } from "react-use-cart";

function ProductDetails(props) {
  const { addItem } = useCart();

  const [count, setCount] = useState(0);
  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    setCount(count - 1);
  }

  const { id } = useParams();
  const oneProduct = productData.find(
    (productData) => productData.id === Number(id)
  );
  return (
    <div className="">
      <div className="mx-auto w-full md:h-[60vh] flex justify-center items-center  ">
        <div className="flex space-x-4 py-12 px-12  shadow-md shadow-gray-400  rounded-sm">
          <div className="bg-white flex items-center justify-center p-4 px-5">
            <div className=" relative bg-transparent object-contain">
              <span>
                <img
                  title={oneProduct.desc}
                  alt="AXC7610-10000S"
                  className="object-cover h-32"
                  src={oneProduct.img}
                />
              </span>
            </div>
          </div>
          <div>
            <span className="font-medium text-lg text-primary">
              {oneProduct.desc}
            </span>
            <span className="text-2xs font-semibold text-secondary uppercase block select-text">
              NETGEAR | Network Cables | Networking and Communication
            </span>
            <span className="text-xs pt-0.5 block select-text">
              NETGEAR - AXC7610-10000S - 10GBase direct attach cable - 10 m
            </span>
            <span className="text-sm pb-1 pt-2 text-black-200 block select-text">
              <span className="font-semibold text-primary">Price: </span>
              <span> $ {oneProduct.price} </span>
            </span>
            <div className="flex items-end space-x-10 pt-7">
              <div className="flex items-end">
                <div>
                  <span className="text-xs pb-2 block select-text">
                    Quantity
                  </span>
                  <div className="flex items-center text-center border-b border-gray-800 py-1.5 justify-between">
                    <button
                      className="text-xl"
                      aria-label="this is button"
                      type="button"
                      onClick={handleClickMinus}
                    >
                      -
                    </button>
                    <input
                      className="text-center w-full text-xs focus:outline-none"
                      type="number"
                      placeholder="0"
                      value={count}
                    />
                    <button
                      onClick={handleClickPlus}
                      className="text-base"
                      aria-label="this is button"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <select
                  className="p-1 ml-2 py-1.5 block w-full border  text-xs lg:text-base placeholder-gray-700 text-gray-700  focus:outline-none"
                  id="condition"
                  name="condition"
                >
                  <option value="Any">Any</option>
                  <option value="New">New</option>
                  <option value="Ref">Ref</option>
                  <option value="Used">Used</option>
                  <option value="F/S">F/S</option>
                  <option value="NOB">NOB</option>
                </select>
              </div>
              <button
                className="border border-primary text-sm hover:text-primary w-48 py-2 px-8 bg-primary hover:bg-transparent text-white transition-all"
                aria-label="this is button"
                onClick={() => {
                  alert("item is added to Cart");
                  addItem(props.item);
                }}
              >
                Add to Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
