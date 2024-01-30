"use client";
import ShoesCard from "./ShoesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newArrivals } from "@/constants/products";
import Link from "next/link";

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
    <div className="w-[95%] p-12 mx-10">
      <div className="flex items-center justify-center pb-6">
        <div className="bg-[url('/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
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
        <div className="flex items-center justify-center pt-10">
          <Link href="/products">
            <button className="btn btn-error">Visit More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResizableSlider;
