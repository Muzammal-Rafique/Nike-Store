import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#e79d3b]">
        <div className="navbar-start">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link href="/">
              <Image
                src="/nike-logo.svg"
                alt="nikelogo"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/features">Features</Link>
          <Link href="/about-us">About Us</Link>
        </div>
        <div className="navbar-end">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
