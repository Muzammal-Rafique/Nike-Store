import ShoesDetails from "@/components/ShoesDetails";
import { products, newArrivals } from "@/constants/products";
import React from "react";

interface props {
  params: { id: number };
}
const page = ({ params }: props) => {
  const product =
    products.find((product) => product?.id === Number(params.id)) ||
    (Number(params.id) > 21
      ? newArrivals.find((product) => product?.id === Number(params.id))
      : undefined);

  if (!product) {
    <div>Product is not Found</div>;
  }

  return (
    <div>
      <ShoesDetails
        id={product?.id}
        title={product?.title}
        description={product?.description}
        price={product?.price}
        rating={product?.rating}
        image={product?.image}
      />
    </div>
  );
};

export default page;
