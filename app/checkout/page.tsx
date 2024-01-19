"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import UserForm from "./_components/UserForm";
import OrderSummary from "./_components/OrderSummary";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useCart();

  const calculateTotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const placeOrder = () => {
    dispatch({ type: "CLEAR_CART" });
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
          <OrderSummary items={state.cart} total={calculateTotal()} />
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
