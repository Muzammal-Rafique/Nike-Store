"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartButton from "./button/CartButton";
import BuyButton from "./button/BuyButton";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ShoesCard = ({ id, title, price, image, rating }: ProductProps) => {
  const { state } = useCart();
  const isProductInCart = state.cart.some((product) => product.id === id);
  return (
    <>
      <div className="card card-compact w-96 h-[500px] bg-card shadow-xl">
        <figure className="bg-[#e79d3b]  w-96 h-96">
          <Link href={`/products/${id}`}>
            <Image
              src={image}
              width={300}
              height={300}
              alt="Shoes"
              className="my-[-60px] mx-[-20px] "
            />
          </Link>
        </figure>
        <div className="card-body">
          <div className=" flex justify-start gap-2.5">
            <Image src="/star.svg" alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              {`(${rating})`}
            </p>
          </div>
          <Link href={`/products/${id}`}>
            <h2 className="card-title line-clamp-1">{title}</h2>
          </Link>
          <p className="font-semibold font-montserrat text-[#FF6452] text-2xl leading-normal">
            $ {price}
          </p>
          <div className="card-actions justify-end">
            <CartButton
              productId={id}
              title={title}
              image={image}
              price={price}
              disabled={isProductInCart}
            />
            <BuyButton id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesCard;
