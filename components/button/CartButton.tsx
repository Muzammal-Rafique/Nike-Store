"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartButtonProps {
  productId: number;
  title: string;
  image: string;
  price: number;
  disabled?: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({
  productId,
  title,
  image,
  price,
  disabled,
}) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: productId, title, image, price, quantity: 1 },
    });
  };

  const handleCartButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    addToCart();
    event.preventDefault();
  };

  return (
    <>
      {disabled ? (
        <Link href="/cart">
          <button className="btn btn-primary">View Cart</button>
        </Link>
      ) : (
        <button className="btn btn-error" onClick={handleCartButtonClick}>
          Add to Cart
        </button>
      )}
    </>
  );
};

export default CartButton;
