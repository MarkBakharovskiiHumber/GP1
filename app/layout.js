import "GP1\styles\globals.css";
import Navbar from "GP1\components\Navbar.js";
import Footer from "GP1\components\Footer.js";
import { CartProvider } from "GP1\context\CartContext.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}