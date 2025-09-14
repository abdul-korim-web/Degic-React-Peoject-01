import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    image: "image/Portfolio.png",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce app using React, Node, and MongoDB.",
    image: "image/E-commerce.png",
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with user authentication and posts.",
    image: "image/BlogPlatform.png",
  },
];

const ProjectsSection = () => {
  const handleDemoClick = () => {
    alert("This is a demo project. The full project will be completed soon.");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-2">My Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Some of the projects I have worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleDemoClick}
                className="mt-4 bg-purple-900 text-white text-center rounded-lg px-4 py-2 font-semibold transition-all hover:bg-purple-700 cursor-pointer"
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
