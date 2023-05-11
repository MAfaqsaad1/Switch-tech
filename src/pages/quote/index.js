import React from "react";
import { useCart } from "react-use-cart";

function Quote() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <div className="">
            <div className="">
                <div className="max-w-7xl mx-auto md:p-5 px-4 py-5 md:py-16 pt-14">
                    <form className="shadow-lg shadow-gray-300 p-5 py-6 w-full">
                        <h3 className="font-black text-2xl text-center text-black">
                            REQUEST A <span className="text-primary">QUOTE</span>
                        </h3>
                        <span className="text-gray-700 text-sm text-center max-w-xl px-4 mx-auto font-light leading-normal pt-2 block select-text">
                            Cannot find the product part you are looking for? Fill the quote
                            to request for your desired part and we will get back to you as
                            soon as possible.
                        </span>
                        <div className="pt-6">
                            <span className="text-sm pb-3 font-medium text-black-200 block select-text">
                                Personal Details:
                            </span>
                            <div className="grid md:grid-cols-6 grid-cols-1 md:gap-2">
                                <div className="grid grid-cols-2 gap-2 col-span-4 pb-2 md:pb-0">
                                    <input
                                        type=""
                                        name="firstName"
                                        id="firstName"
                                        className="p-2 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="First Name"
                                    />
                                    <input
                                        type=""
                                        name="lastName"
                                        id="lastName"
                                        className="p-2 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Last Name"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="p-2 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Email"
                                    />
                                    <input
                                        type=""
                                        name="Organization"
                                        id="Organization"
                                        className="p-2 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Organization Name"
                                    />
                                    <input
                                        type=""
                                        name="ZipCode"
                                        id="ZipCode"
                                        className="p-2 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Zip Code"
                                    />
                                </div>
                                <div className="col-span-2 grid md:grid-cols-1 grid-cols-2 items-start gap-2">
                                    <input
                                        type="text"
                                        name="phone"
                                        id=""
                                        className="p-2 py-2 block w-full border text-sm border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Phone No."
                                    />
                                    <textarea
                                        name="Message"
                                        id="Message"
                                        rows="4"
                                        placeholder="Message"
                                        className="p-2 py-1.5 block w-full border text-sm placeholder-gray-700 text-gray-700 focus:outline-none border-gray-100"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <span className="text-sm pb-3 font-medium text-black-200 block select-text">
                                Part Details:
                            </span>
                            <div className="md:flex w-full md:space-x-2">
                                <div className="grid md:grid-cols-4 grid-cols-2 w-full gap-2">
                                    <div className="relative">
                                        <input
                                            className="bg-white relative w-full border border-gray-100 text-sm shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 "
                                            placeholder="Country"
                                            type="Country"
                                        />
                                    </div>
                                    <select
                                        className="p-1 py-1.5 block w-full border  text-sm placeholder-gray-700 text-gray-700  focus:outline-none"
                                        id="Condition"
                                        name="Condition"
                                    >
                                        <option value="Any">Any</option>
                                        <option value="New">New</option>
                                        <option value="Ref">Ref</option>
                                        <option value="Used">Used</option>
                                        <option value="F/S">F/S</option>
                                        <option value="OEM">OEM</option>
                                        <option value="NOB">NOB</option>
                                    </select>
                                    <input
                                        type="number"
                                        name="Quantity"
                                        id=""
                                        className="p-2 py-1.5 block w-full border text-sm border-gray-100 placeholder-gray-700 text-gray-700 focus:outline-none "
                                        placeholder="Quantity"
                                    />
                                    <button
                                        className="border hover:border-primary border-transparent whitespace-nowrap text-sm hover:text-primary px-8 py-2.5 bg-primary hover:bg-white text-white"

                                    >
                                        Add to Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="overflow-x-auto border border-gray-300 mt-4">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-2 whitespace-nowrap text-left md:text-sm text-sm font-semibold"
                                            >
                                                Part Details
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-2 whitespace-nowrap text-center md:text-sm text-sm font-semibold"
                                            >
                                                Product Image
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-2 text-center text-sm font-semibold"
                                            >
                                                Condition
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-2 text-center text-sm font-semibold"
                                            >
                                                Quantity
                                            </th>
                                            <th scope="col" className="relative px-4 py-2">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    {items.map((item, index) => {
                                        return <tbody className="" key={index}>
                                            <tr>
                                                <td className="px-4 py-3 border  text-sm  text-left font-medium text-gray-900">
                                                    <span className="text-sm  font-bold text-secondry uppercase block select-text">
                                                        {item.desc}
                                                    </span>
                                                    <span className="text-sm w-56 text-wrap py-2 block select-text">
                                                        {item.detail}
                                                    </span>
                                                    <span className="text-sm pb-1 pt-2 text-black-200 block select-text">
                                                        <span className="font-semibold text-secondry">
                                                            Price:{" "}
                                                        </span>
                                                        <span> $ {item.price} </span>
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 border whitespace-nowrap text-sm text-center">
                                                    <div className="bg-white mx-auto flex items-center justify-center p-3">
                                                        <img
                                                            src={item.img}
                                                            className="object-cover h-24"
                                                            alt=""
                                                            srcset=""
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 border whitespace-nowrap text-sm text-center">
                                                    <select className="p-1 py-1.5 block w-full border  text-sm placeholder-gray-700 text-gray-700  focus:outline-none">
                                                        <option value="Any" selected="">
                                                            Any
                                                        </option>
                                                        <option value="New">New</option>
                                                        <option value="Ref">Ref</option>
                                                        <option value="Used">Used</option>
                                                        <option value="F/S">F/S</option>
                                                        <option value="OEM">OEM</option>
                                                        <option value="NOB">NOB</option>
                                                    </select>
                                                </td>

                                                <td className="px-4 py-3 border whitespace-nowrap text-sm w-12 text-center">
                                                    <div className="flex items-center text-center border-b border-gray-800 py-1.5 justify-between">
                                                        <button
                                                            onClick={(e) =>
                                                                updateItemQuantity(item.id, item.quantity - 1)

                                                            }
                                                            className="text-xl"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            className="text-center w-full text-sm focus:outline-none"
                                                            value={item.quantity}
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                updateItemQuantity(item.id, item.quantity + 1)
                                                            }
                                                            className="text-base"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 border whitespace-nowrap text-sm text-center font-medium">
                                                    <div className="w-3 h-3 cursor-pointer relative">
                                                        <span onClick={() => removeItem(item.id)}>
                                                            <i class=" text-base text-white font-bold  bg-red-500">
                                                                &#xf014;
                                                            </i>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={() => {
                                    emptyCart();
                                    alert("Your oder is placed");
                                }}
                                className="border hover:border-primary border-transparent  text-sm hover:text-primary px-8 py-2.5 bg-primary hover:bg-white text-white"
                                aria-label="this is button"
                                type="submit"
                            >
                                {isEmpty ? "Cart is Empty" : "Submit Quote"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Quote;
