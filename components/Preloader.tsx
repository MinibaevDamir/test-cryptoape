"use client";

import { motion, Variants } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";
import React, { JSX } from "react";

const preloaderStyle: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",
  background: "#f0f0f0",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Geist', sans-serif",
  fontSize: "24px",
  fontWeight: "500",
};

const iconVariants: Variants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.2, 1, 1.2, 1],
  },
  transition: {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const Preloader = (): JSX.Element => {
  return (
    <div style={preloaderStyle}>
      <motion.div
        variants={iconVariants}
        animate="animate"
        transition={iconVariants.transition}
      >
        <FaBitcoin size={70} color="#F7931A" />
      </motion.div>
      <div style={titleStyle}>Fetching Bitcoin & Solana rates...</div>
    </div>
  );
};

export default Preloader;
