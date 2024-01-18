"use client";
import React from "react";
import { newArrivals, products } from "@/constants/products";
import { useCart } from "@/context/CartContext";

interface props {
  params: { id: number };
}

const CheckoutPage: React.FC<props> = ({ params }) => {
  const { state } = useCart();

  const product =
    products.find((product) => product?.id === Number(params.id)) ||
    (Number(params.id) > 21
      ? newArrivals.find((product) => product?.id === Number(params.id))
      : undefined);
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Customer Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Information</h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="+93000000000"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="State / Province / City"
              />
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Display a summary of items in the cart or product */}
          <div className="mb-4">
            <p>
              {product?.title} - 1 - ${product?.price.toFixed(2)}
            </p>
          </div>

          {/* Display total amount */}
          <div className="flex justify-between border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-semibold">$199.98</span>
          </div>

          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            // Add onClick handler for placing the order
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
