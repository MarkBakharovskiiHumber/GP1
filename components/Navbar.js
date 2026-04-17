import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Store</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}