import React from "react";
import { newArrivals, products } from "@/constants/products";
import ShoesCard from "@/components/ShoesCard";

const page = () => {
  return (
    <div className="mb-5 pb-10">
      <div className="flex justify-center pt-10 gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
      </div>
      <div className="mt-16 ml-8 grid lg:grid-cols-4 gap-14 md:grid-cols-2">
        {newArrivals.map((product) => (
          <ShoesCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
        {products.map((product) => (
          <ShoesCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
