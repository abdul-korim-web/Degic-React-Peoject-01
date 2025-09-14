import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites using React, Tailwind CSS, and JavaScript.",
    image: "/image/webdevelopment.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing beautiful interfaces and improving user experiences for web projects.",
    image: "image/uiux.jpeg",
  },
  {
    title: "Version Control",
    description:
      "Managing code efficiently using Git and GitHub with proper workflow and collaboration.",
    image: "image/versioncontrol.png",
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring websites look great on all devices including phones, tablets, and desktops.",
    image: "image/ResponsiveDesign.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <div className="text-center mb-16">
        <motion.h1
          className="text-5xl font-bold text-purple-900 font-mono"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          My Services
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-700 text-lg md:text-xl font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          I provide modern web development services using the latest technologies.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-purple-900 mb-2 font-mono">
              {service.title}
            </h2>
            <p className="text-gray-600 font-mono">{service.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-mono"
            >
              <a href="https://github.com/abdul-korim-web/" target="_black">Learn More</a>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
