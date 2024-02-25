import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#e79d3b]">
        <div className="navbar-start pl-10">
          <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle">
            <Link href="/">
              <Image
                src="/nike-logo.svg"
                alt="nikelogo"
                width={80}
                height={80}
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center text-2xl gap-8 ">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/features">Features</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="navbar-end">
          <Cart />
        </div>
        <div className="dropdown hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
