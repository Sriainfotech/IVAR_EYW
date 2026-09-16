"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("ivarCart") || "[]");
      setCart(stored);
    } catch {
      setCart([]);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("ivarCart", JSON.stringify(cart));
  }, [cart, loaded]);

  function showToast(message) {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }

  function add(id, qty = 1) {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    if (["Yoga", "Wellness"].includes(product.group)) {
      showToast(`${product.name} is coming soon — not available yet.`);
      return;
    }
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { id, qty }];
    });
    setIsOpen(true);
    showToast(`Added to cart — ${product.name} × ${qty}`);
  }

  function change(id, n) {
    setCart((prev) => {
      const next = prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + n } : i))
        .filter((i) => i.qty > 0);
      return next;
    });
  }

  function remove(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function checkout() {
    alert(
      "Demo checkout: connect Razorpay/Stripe/other payment gateway, shipping, GST invoices and order management before production launch."
    );
  }

  const count = cart.reduce((s, i) => s + i.qty, 0);
  const lines = cart
    .map((i) => {
      const p = products.find((x) => x.id === i.id);
      if (!p) return null;
      return { ...i, product: p };
    })
    .filter(Boolean);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);

  const value = {
    cart,
    lines,
    count,
    subtotal,
    isOpen,
    toast,
    add,
    change,
    remove,
    openCart,
    closeCart,
    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
