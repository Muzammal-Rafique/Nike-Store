"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HeroSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src="/n1-min.png" alt="nike1" width={1000} height={1200} />
        </div>
        <div>
          <Image src="/n2-min.png" alt="nike1" width={1000} height={1200} />
        </div>
        <div>
          <Image src="/n3-min.png" alt="nike1" width={1000} height={1200} />
        </div>
        <div>
          <Image src="/n4-min.png" alt="nike1" width={1000} height={1200} />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
