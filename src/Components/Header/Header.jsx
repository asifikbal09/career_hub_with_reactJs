import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header">
      {/* <h3 className="font-semibold text-3xl">BoLesk</h3>
      <div className="gap-4 flex text-black">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/statistics">Statistics</Link>
        <Link className="link" to="/applied-jobs">Applied Jobs</Link>
        <Link className="link" to="/blog">Blog</Link>
      </div>
      <button className="common-btn">Star Applying</button> */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link  to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/applied-jobs">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            
          </div>
          <Link className="btn btn-ghost normal-case text-xl">BoLesk</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link  to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/applied-jobs">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Start Applying</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
