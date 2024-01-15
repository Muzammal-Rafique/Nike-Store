import ShoesDetails from "@/components/ShoesDetails";
import { products } from "@/constants/products";
import React from "react";

interface props {
  params: { id: number };
}
interface ProductProps {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  rating?: number;
}

const page = ({ params }: props) => {
  const product = products.find(
    (product: ProductProps | undefined) => product?.id === Number(params.id)
  );

  if (!product) {
    <div>Product is not Found</div>;
  }

  return (
    <div>
      <ShoesDetails
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
