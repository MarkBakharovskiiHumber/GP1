"use client";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const products = [
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "T-Shirt", price: 25 },
    { id: 3, name: "Hat", price: 15 },
    { id: 4, name: "Jacket", price: 100 },
  ];

  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}