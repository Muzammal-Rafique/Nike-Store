import React from "react";
import { products } from "@/constants/products";
import ShoesCard from "@/components/ShoesCard";

const page = () => {
  return (
    <div>
      <div className="mt-16 ml-8 grid grid-cols-3 gap-14">
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
