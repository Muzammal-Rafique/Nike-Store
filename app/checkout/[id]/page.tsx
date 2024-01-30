"use client";
import React from "react";
import { newArrivals, products } from "@/constants/products";
import UserForm from "../_components/UserForm";
import OrderSummary from "../_components/OrderSummary";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface props {
  params: { id: number };
}

const CheckoutPage: React.FC<props> = ({ params }) => {
  const router = useRouter();
  const product =
    products.find((product) => product?.id === Number(params.id)) ||
    (Number(params.id) > 21
      ? newArrivals.find((product) => product?.id === Number(params.id))
      : undefined);
  const placeOrder = () => {
    toast.success("Your order is placed!");
    router.push("/");
  };
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
          <UserForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <OrderSummary
            items={[
              { title: product?.title, quantity: 1, price: product?.price },
            ]}
            total={product?.price || 0}
          />
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => placeOrder()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
