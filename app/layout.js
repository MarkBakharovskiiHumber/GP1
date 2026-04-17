import "GP1\styles\globals.css";
import Navbar from "GP1\components\Navbar.js";
import Footer from "GP1\components\Footer.js";

export const metadata = {
  title: "E-commerce Store",
  description: "Simple Next.js store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
