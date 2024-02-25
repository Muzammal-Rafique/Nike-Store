"use client";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="h-[95vh] flex pl-10  bg-[#e79d3b] max-sm:flex-col">
      <div className="relative flex flex-col justify-center items-start w-2/3 pt-10 pl-5">
        <p className="text-3xl font-montserrat text-[#ff5252]">
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
        <Link href="/products">
          <button className="btn btn-info">
            Shop Now
            <ArrowRightIcon />
          </button>
        </Link>
      </div>
      <div className="w-1/3 pt-20 h-full pr-10">
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
