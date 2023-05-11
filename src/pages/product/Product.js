import React from "react";
import { Link } from "react-router-dom";
import productData from "../data/data";
import ItemCart from "./ItemCart";

export default function Product() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:items-start items-center gap-2  md:px-36 px-5 py-16">
      {productData.map((product, index) => {
        return (
          <div className="">
            <Link to={`/product/${product.id}`}>
              <ItemCart
                img={product.img}
                title={product.title}
                desc={product.desc}
                price={product.price}
                item={product}
                key={index}
                detail={product.detail}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
