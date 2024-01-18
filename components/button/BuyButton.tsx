import Link from "next/link";
import React from "react";

interface props {
  id: number;
}

const BuyButton = ({ id }: props) => {
  return (
    <Link href={`/checkout/${id}`}>
      <button className="btn btn-success">Buy Now</button>
    </Link>
  );
};

export default BuyButton;
