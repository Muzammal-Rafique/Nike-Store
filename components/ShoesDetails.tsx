"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: number;
}

const ShoesDetails = ({
  id,
  title,
  description,
  price,
  image,
  rating,
}: ProductProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="hero min-h-screen shadow-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={image}
            alt="shoes"
            width={1000}
            height={900}
            className="max-w-sm rounded-lg shadow-2xl bg-[#e79d3b]"
          />
          <div className="w-1/2">
            <h1 className="!text-5xl font-bold text-[#FF6452] ">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="font-semibold font-montserrat text-[#FF6452] text-2xl leading-normal pt-5">
              <span className="text-black">Price:</span> {price} $
            </p>
            <div className=" flex justify-start gap-2.5 pt-8">
              <Image src="/star.svg" alt="rating icon" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-slate-gray ">
                {`(${rating})`}
              </p>
            </div>
            <div className="card-actions justify-start pt-10">
              <button className="btn btn-info">Add Cart</button>
              <button className="btn btn-success">Buy Now</button>
            </div>
            <div className="flex pt-5">
              <button
                className="btn btn-error"
                onClick={() => router.push("/products")}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetails;
