import React from "react";

function AddCategory() {
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
            Add New Category
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-gray-300 py-2 px-3 ">
        <div className="col-span-6">
          <h3>Name</h3>
        </div>

        <div className="col-span-2">
          <h3>Status</h3>
        </div>
        <div className="col-span-2">
          <h3>Action</h3>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-12  py-2 px-1 text-sm odd:bg-gray-50 even:bg-slate-200">
          <div className="col-span-6">
            <h3>Srtoage Devices</h3>
          </div>

          <div className="col-span-2  pl-2 ">
            <span className=" text-lg rounded-full bg-green-500 text-white px-1 font-bold ">
              &#10004;
            </span>
          </div>
          <div className="col-span-2 space-x-4">
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

export default AddCategory;
