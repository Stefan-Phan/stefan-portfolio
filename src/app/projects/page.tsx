"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Projects() {
  const ownProjects = [
    {
      name: "SmartSaver",
      tool: "NodeJS, ExpressJS, ReactJS, MySQL, GeminiAPI",
      description:
        "An AI-powered money tracking app providing financial recommendations using Gemini AI, with a backend built in Express.js and MySQL, featuring secure authentication, extensive API support, and financial visualizations.",
      github: "https://github.com/Stefan-Phan/SmartSaver",
    },
    {
      name: "LittleLemon",
      tool: "Django Rest FrameWork, JWT, RESTful API",
      description:
        "A RESTful API for menu management and user authentication, built with Django Rest Framework, featuring JWT-based authentication, role-based access control, and optimized data handling for improved performance.",
      github: "https://github.com/Stefan-Phan/LittleLemon_API",
    },
    {
      name: "GameHub",
      tool: "Django, SQLite, ZEGOCLOUD, React, Socket.io",
      description:
        "A forum-based platform for gamers with real-time chat and live discussions, integrating ZEGOCLOUD for global connectivity and a secure authentication system to ensure a seamless and interactive experience.",
      github: "https://github.com/Stefan-Phan/GameHub",
    },
    {
      name: "GMPS",
      tool: "NodeJS, MongoDB, ExpressJS, JWT",
      description:
        "The General Medical Practice System (GMPS) is a comprehensive backend solution designed to streamline the management of medical practices. Built with Node.js, Express.js, and MongoDB, this system provides a robust API for handling patient bookings, doctor information, and administrative tasks.",
      github: "https://github.com/Stefan-Phan/GMPS",
    },
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <section>
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="mb-17">
            Here are some of the open-source projects I have created and
            maintained. Each project showcases my passion for building useful
            tools and integrations, as well as my commitment to the open-source
            community. From API libraries to smart home integrations, these
            projects are designed to help solve real-world problems while also
            allowing others to contribute, learn, and build upon them. Feel free
            to explore each project and check out the code or contribute if
            you're interested!
          </p>

          <div className="space-y-6">
            {ownProjects.map((project, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-300 pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <div className="flex items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">{project.tool}</p>
                <p className="mt-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
