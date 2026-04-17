"use client";
import { useState } from "react";
import ProductCard from "GP1\components\ProductCard.js";

import ProductList from "GP1\components\ProductList.js";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Store</h1>
      <ProductList />
    </div>
  );
}


export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const products = [
    { id: 1, name: "Shoes", price: 50 },
    { id: 2, name: "T-Shirt", price: 25 },
    { id: 3, name: "Hat", price: 15 },
  ];

  return (
    <div className="container">
      <h1>Welcome to Our Store</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}