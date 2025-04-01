import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";

export default function Projects() {
  const projects = [
    {
      title: "SmartSaver",
      description:
        "Developed an AI-powered money tracking app leveraging Gemini API to provide personalized financial recommendations in diverse tones, implemented a robust backend with 20+ APIs using Express.js, Node.js, and MySQL including secure password hashing, and designed a React frontend featuring 5+ financial diagrams for clear visualization of spending and savings.",
      imageUrl: "/images/project1.jpg",
      imageAlt: "Project 1 Image",
    },
    {
      title: "Little Lemon",
      description:
        "Constructed a comprehensive RESTful API using Django Rest Framework, featuring 20+ endpoints for menu management, user authentication, and order processing, integrated JSON Web Token (JWT) for secure user authentication and implemented role-based access control for 5+ user groups, and optimized data retrieval with pagination and filtering, resulting in a 40% improvement in response times for large datasets.",
      imageUrl: "/images/project1.jpg",
      imageAlt: "Project 1 Image",
    },
    {
      title: "GameHub",
      description:
        "Engineered a forum-based platform enabling real-time gamer discussions across 100+ categories using Django and SQLite, implemented seamless real-time chat via Socket.io, integrated ZEGOCLOUD for concurrent live discussions supporting global users, and developed a secure user authentication and authorization system to ensure controlled access to forums and chat functionalities.",
      imageUrl: "/images/project1.jpg",
      imageAlt: "Project 1 Image",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="container mx-auto px-4 items-center flex flex-col max-w-3xl">
          {" "}
          {/* Add max-w-3xl */}
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
