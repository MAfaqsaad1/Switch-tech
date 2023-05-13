import React from "react";
import { useCart } from "react-use-cart";

function ItemCart(props) {
  const { addItem } = useCart();
  return (
    <div className="">
      <div className="hover:shadow-lg product_card p-2 border bg-white  hover:text-primary transition-all text-black  group">
        <div className="px-4 py-4">
          <div className="bg-white mb-3 w-full h-36 relative  overflow-hidden">
            <div className="mx-auto w-full h-full  relative bg-transparent ">
              <img
                src={props.img}
                alt=""
                srcset=""
                className="object-cover h-36 mx-auto"
              />
            </div>
          </div>
          <span className=" font-semibold leading-3 text-secondry uppercase block select-text">
            {props.desc}
          </span>
          <h3 className="text-2xs h-6  mb-3 mt-0.5 overflow-hidden">
            {props.title}
          </h3>
          <h3 className="text-sm h-16  mb-3 mt-0.5 overflow-hidden">
            {props.detail}
          </h3>
          <span className="text-black-200 text-sm pt-0.5 block select-text">
            <span className="font-bold">Price:</span> $ {props.price}
          </span>
        </div>
        <div className="text-center py-2 px-4">
          <button
            onClick={() => {
              alert("item is added to Cart, Check it");
              addItem(props.item);
            }}
            className="bg-transparent w-full py-2 group-hover:bg-primary hover:bg-secondry text-white"
          >
            Add To Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
