import "./globals.css";
import { DM_Serif_Display, Inter, Caveat } from "next/font/google";
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
import NetworkStatus from "./components/NetworkStatus";
import RouteTransitionOverlay from "./components/RouteTransitionOverlay";

const displaySerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ivarlife.com"),
  title: "Ivar™ — Innovating Indian Food for the World",
  description:
    "Ivar develops, processes and delivers modern food products built from India's ingredients and food traditions.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/assets/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ivar™ — Innovating Indian Food for the World",
    description:
      "Ivar develops, processes and delivers modern food products built from India's ingredients and food traditions.",
    siteName: "Ivar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivar™ — Innovating Indian Food for the World",
    description:
      "Ivar develops, processes and delivers modern food products built from India's ingredients and food traditions.",
  },
};

export const viewport = {
  themeColor: "#173A2B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displaySerif.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="bg-[#F5F0E4] text-[#172019] pb-16 md:pb-0">
        <CartProvider>
          <ProductModalProvider>
            <NetworkStatus />
            <RouteTransitionOverlay />
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
