import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ShoesCard = ({ id, title, price, image, rating }: ProductProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="card card-compact w-96 h-[500px] bg-card shadow-xl">
        <figure className="bg-[#e79d3b]  w-96 h-96">
          <Image
            src={image}
            width={300}
            height={300}
            alt="Shoes"
            className="my-[-60px] mx-[-20px] "
          />
        </figure>
        <div className="card-body">
          <div className=" flex justify-start gap-2.5">
            <Image src="/star.svg" alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              {`(${rating})`}
            </p>
          </div>
          <h2 className="card-title line-clamp-1">{title}</h2>
          <p className="font-semibold font-montserrat text-[#FF6452] text-2xl leading-normal">
            $ {price}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Add Cart</button>
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShoesCard;
