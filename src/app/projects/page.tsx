import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileSection from "../components/ProfileSection";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <ProfileSection />
      </main>

      <Footer />
    </div>
  );
}
