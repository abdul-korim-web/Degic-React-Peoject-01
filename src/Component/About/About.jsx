import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-purple-100 py-24 px-5 md:px-20 min-h-screen overflow-hidden">
      {/* Decorative Background Shapes */}
      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/19/58/abstract-1298300_1280.png"
        alt="decorative"
        className="absolute top-0 left-0 w-32 opacity-30 animate-pulse"
      />
      <img
        src="https://cdn.pixabay.com/photo/2015/12/09/21/34/circle-1082613_1280.png"
        alt="decorative"
        className="absolute bottom-10 right-0 w-40 opacity-20 animate-bounce"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src="image/myPhoto.jpg"
            alt="Profile"
            className="rounded-3xl shadow-2xl w-72 md:w-full border-4 border-purple-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="w-full md:w-2/3 space-y-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="text-5xl font-bold font-mono text-purple-900">
            About Me
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-mono leading-relaxed">
            Hello! I am Abdul Korim, a creative and passionate Web Developer. I specialize in modern web technologies such as <span className="font-bold text-purple-800">HTML, CSS, Tailwind, JavaScript, React</span> and version control with <span className="font-bold text-purple-800">Git & GitHub</span>. I build responsive, interactive, and visually appealing websites.
          </p>
          <p className="text-gray-700 text-lg md:text-xl font-mono leading-relaxed">
            My mission is to craft amazing digital experiences. I love exploring new technologies, solving challenges, and bringing innovative ideas to life.
          </p>

          {/* Skills Icons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML" className="w-12 h-12" />
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" className="w-12 h-12" />
            <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind" className="w-12 h-12" />
            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JS" className="w-12 h-12" />
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-12 h-12" />
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="GitHub" className="w-12 h-12" />
          </div>

          {/* Contact Button */}
          <motion.button 
            className="mt-6 bg-purple-900 text-white px-6 py-3 rounded-lg font-mono hover:bg-purple-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <a href="https://www.linkedin.com/in/abdul-korim-web/" target="_blank">Contact Me</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
