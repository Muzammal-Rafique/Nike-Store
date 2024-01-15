import Image from "next/image";
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
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={image}
            alt="shoes"
            width={1000}
            height={1000}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className=" flex justify-start gap-2.5">
              <Image src="/star.svg" alt="rating icon" width={24} height={24} />
              <p className="font-montserrat text-xl leading-normal text-slate-gray ">
                {`(${rating})`}
              </p>
            </div>
            <p className="font-semibold font-montserrat text-[#FF6452] text-2xl leading-normal pt-10">
              $ {price}
            </p>
            <div className="card-actions justify-start pt-10">
              <button className="btn btn-info">Add Cart</button>
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetails;
