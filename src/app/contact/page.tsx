// Contact.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/Contact";

export default function Contact() {
  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <Header />

      <motion.main
        className="flex-grow flex flex-col items-center justify-center px-4"
        variants={contentVariants}
      >
        <ContactForm />
      </motion.main>

      <Footer />
    </motion.div>
  );
}
