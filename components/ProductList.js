"use client";
import ProductCard from "GP1\components\ProductCard.js";

const products = [
  { id: 1, name: "Shoes", price: 50 },
  { id: 2, name: "T-Shirt", price: 25 },
  { id: 3, name: "Hat", price: 15 },
  { id: 4, name: "Jacket", price: 100 },
];

export default function ProductList() {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
