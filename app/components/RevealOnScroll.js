"use client";

import { motion } from "framer-motion";

export default function RevealOnScroll({
  children,
  delay = 0,
  y = 40,
  duration = 0.7,
  once = true,
  amount = 0.3,
  className = "",
  as: Tag = motion.div,
}) {
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
