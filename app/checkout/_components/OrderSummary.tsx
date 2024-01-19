import React from "react";

interface OrderSummaryProps {
  items: { title: string; quantity: number; price: number }[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <div>
      <div className="mb-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 border-none text-left">Product</th>
              <th className="py-2 border-none text-left">Quantity</th>
              <th className="py-2 border-none text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 border-none">{item.title}</td>
                <td className="py-2 border-none"> {item.quantity}</td>
                <td className="py-2 border-none"> ${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display total amount */}
      <div className="flex justify-between border-t pt-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-semibold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
