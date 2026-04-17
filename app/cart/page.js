"use client";
import { useCart } from "GP1\context\CartContext.js";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="card">
          {item.name} - ${item.price}
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}