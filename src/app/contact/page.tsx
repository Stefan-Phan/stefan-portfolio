import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/Contact";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
