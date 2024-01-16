"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container px-7 pl-7 "
      >
        <div className="flex flex-1 flex-col w-1/2">
          <h2 className="font-palanquin capitalize text-5xl lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <button
              className="btn btn-error"
              onClick={() => router.push("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/shoe8.svg"
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
      <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container pt-20 pb-10 pl-10">
        <div className="flex-1">
          <Image
            src="/offer.svg"
            alt="Shoe Promotion"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col pr-5">
          <h2 className="text-6xl font-palanquin font-bold">
            <span className="text-coral-red">Special </span>
            Offer
          </h2>
          <p className="mt-4 text-xl">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 text-xl">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <button
              className="btn btn-error"
              onClick={() => router.push("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
