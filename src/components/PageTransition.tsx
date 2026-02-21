"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 60 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
