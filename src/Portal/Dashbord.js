import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/User.png";

function Dashbord(props) {
  return (
    <div className="">
      <div className="w-full grid grid-cols-5 h-screen bg-blueP">
        <aside
          className="col-span-1  text-white px-10 py-8
                 bg-gradient-to-t from-blue-900 to-blueP"
        >
          <div className="logo py-6 text-center text-4xl ">Logo</div>
          <ul className="   transition-all py-6">
            <Link to="/">
              <li>Dashbord</li>
            </Link>
            <Link to="/AddUser">
              <li>User</li>
            </Link>
            <Link to="/AddTag">
              <li>Tags</li>
            </Link>
            <Link to="/AddBrand">
              <li>Brands</li>
            </Link>
            <Link to="/AddCategory">
              <li>Category</li>
            </Link>
            <Link to="/AddSubCategory">
              <li>Sub Category</li>
            </Link>
            <Link to="/AddProduct">
              <li>Products</li>
            </Link>
            <Link to="/AddRoll">
              <li>Roles</li>
            </Link>
            <Link to="/AddBlog">
              <li>Blog</li>
            </Link>
            <Link to="/AddBlogCategory">
              <li>Blog Category</li>
            </Link>
          </ul>
        </aside>
        <div className="col-span-4 bg-white px-10 py-8 rounded-tl-3xl rounded-bl-3xl  shadow-blue-900 shadow-xl">
          <nav className="flex justify-between pb-5">
            <div className="">
              <h2 className="text-primary text-2xl font-medium">Product</h2>
            </div>
            <div className="user">
              <div className="flex items-center space-x-4">
                <div className="font-medium  text-right">
                  <h3>Jese Leos</h3>
                  <h4 className="text-sm text-gray-400">Admin</h4>
                </div>
                <img className="w-10 h-10 rounded-full" src={user} alt="" />
              </div>
            </div>
          </nav>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
