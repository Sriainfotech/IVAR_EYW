import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { ProductModalProvider } from "./context/ProductModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";
import MobileTabBar from "./components/MobileTabBar";
import ProductModal from "./components/ProductModal";
import FloatingMiniCart from "./components/FloatingMiniCart";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AskIvarWidget from "./components/AskIvarWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ivarlife.com"),
  title: "Ivar — Eat | Yoga | Wellness",
  description:
    "Ivar — thoughtfully made food, nutrition and wellness for everyday living.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/assets/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ivar — Eat | Yoga | Wellness",
    description:
      "Ivar — thoughtfully made food, nutrition and wellness for everyday living.",
    siteName: "Ivar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivar — Eat | Yoga | Wellness",
    description:
      "Ivar — thoughtfully made food, nutrition and wellness for everyday living.",
  },
};

export const viewport = {
  themeColor: "#0a3d24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#fbfaf5] text-[#173126] pb-16 md:pb-0">
        <CartProvider>
          <ProductModalProvider>
            <Header />
            {children}
            <Footer />
            <CartDrawer />
            <Toast />
            <MobileTabBar />
            <ProductModal />
            <FloatingMiniCart />
            <FloatingWhatsApp />
            <AskIvarWidget />
          </ProductModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
