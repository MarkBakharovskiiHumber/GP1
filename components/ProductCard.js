"use client";
import Link from "next/link";
import { useCart } from "GP1\context\CartContext.js";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
