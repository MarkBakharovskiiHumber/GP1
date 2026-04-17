"use client";
import { useCart } from "GP1\context\CartContext.js";

export default function ProductDetails({ params }) {
  const { addToCart } = useCart();

  const product = {
    id: params.id,
    name: "Sample Product",
    price: 99,
  };

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
