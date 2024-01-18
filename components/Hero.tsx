"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[95vh] bg-opacity-50"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* <Navbar /> */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-20 pl-5">
        <p className="text-xl font-montserrat text-[#ff5252]">
          Our Summer collections
        </p>

        <h1 className="mt-8 font-palanquin text-[#3cbae2] text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-white inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-[#173f4b] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="btn btn-info">
          Shop Now
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Hero;
