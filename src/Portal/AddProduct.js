import React from "react";

function AddProduct() {
  return (
    <div>
      <div className="flex justify-between py-6">
        <div className="">
          <input
            type="search"
            className="outline-none px-3 py-1 border-2 md:w-60"
            placeholder="Search..."
          />
        </div>
        <div className="">
          <button
            className=" bg-primary transition-all  hover:bg-blueDark lg:px-6 px-4  py-1.5
               rounded-sm text-white"
          >
            Add New Product
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-gray-300 py-2 px-3 ">
        <div className="col-span-4">
          <h3>Name</h3>
        </div>
        <div className="col-span-1">
          <h3>Part No</h3>
        </div>
        <div className="col-span-2">
          <h3>Category</h3>
        </div>
        <div className="col-span-1">
          <h3>Brands</h3>
        </div>
        <div className="col-span-1">
          <h3>Quantity</h3>
        </div>
        <div className="col-span-1">
          <h3>Price</h3>
        </div>
        <div className="col-span-1">
          <h3>Status</h3>
        </div>
        <div className="col-span-1">
          <h3>Action</h3>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-4">
            <h3>
              Lenovo - 4XC7A08238 - ThinkSystem Broadcom 57414 network adapter
              PCIe 3.0 x8 - IOGb Ethernet / 25Gb Ethernet SFP28 x 2
            </h3>
          </div>
          <div className="col-span-1">
            <h3>4XC7A0</h3>
          </div>
          <div className="col-span-2 ">
            <h3>Networking </h3>
          </div>
          <div className="col-span-1">
            <h3>Lenovo</h3>
          </div>
          <div className="col-span-1 pl-2">
            <h3>2</h3>
          </div>
          <div className="col-span-1">
            <h3>$875.00</h3>
          </div>
          <div className="col-span-1  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-1 space-x-4">
            <i className="text-primary text-xl cursor-pointer">&#9998;</i>
            <span className="text-xl  text-red-400  font-extrabold cursor-pointer">
              &#128465;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
