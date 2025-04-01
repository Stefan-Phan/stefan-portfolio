// pages/index.js
import Head from "next/head";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Stefan Phan</title>
        <meta name="description" content="Stefan Phan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <ProfileSection />
      </main>

      <Footer />
    </div>
  );
}
