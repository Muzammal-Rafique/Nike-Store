"use client";

// components/ResizableSlider.tsx

import React, { useState } from "react";
import Slider from "react-slick";
import ShoesCard from "./ShoesCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newArrivals } from "@/constants/products";

const ResizableSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full p-12">
      <h2 className="text-2xl font-bold mb-4">Resizable Collapsible</h2>
      <div>
        <Slider {...settings}>
          {newArrivals.map((product) => (
            <div key={product.id}>
              <ShoesCard
                title={product.title}
                id={product.id}
                rating={product.rating}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResizableSlider;
