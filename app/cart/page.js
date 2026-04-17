"use client";
import { useState } from "react";

export default function Cart() {
  const [cart] = useState([
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "T-Shirt", price: 25 },
  ]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="card">
          {item.name} - ${item.price}
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}