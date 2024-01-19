"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, newQuantity } });
  };

  const calculateTotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {state.cart.length === 0 ? (
        <p className="p-10">Your cart is empty.</p>
      ) : (
        <>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">Product</th>
                <th className="py-2 px-4 border-b text-left">Image</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Quantity</th>
                <th className="py-2 px-4 border-b text-left">Total</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center">
                      <button
                        className="text-gray-500 hover:text-gray-700 mr-2"
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            Math.max(item.quantity - 1, 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="text-gray-500 hover:text-gray-700 ml-2"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Image
                        src="/icons/delete.svg"
                        alt="delete icon"
                        width={40}
                        height={40}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          </div>

          <div className="mt-8 flex justify-between">
            <Link href="/products">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Continue Shopping
              </button>
            </Link>
            <Link href="/checkout">
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
