import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen py-16 px-4 md:px-20 bg-gradient-to-r from-purple-200 via-pink-100 to-purple-50 flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* Left Side - Profile Image and Social Links */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src="image/myPhoto.jpg"
          alt="Profile"
          className="rounded-3xl shadow-2xl w-full  max-w-sm object-cover border-4 border-white"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
        <div className="flex gap-6 mt-4">
          <motion.a
            href="https://github.com/abdul-korim-web"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#000000" }}
            className="text-gray-700 text-3xl transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abdul-korim/"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="text-blue-700 text-3xl transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/abdul.korim"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#1877F2" }}
            className="text-blue-500 text-3xl transition-colors"
          >
            <FaFacebook />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side - Glassmorphic Form */}
      <motion.div
        className="w-full md:w-1/2 backdrop-blur-md bg-white/60 rounded-3xl shadow-2xl p-10 flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-purple-900">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-6 text-center md:text-left">
          I’m open to new opportunities and collaborations. Send me a message or connect via social links.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-xl p-4 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#7E22CE" }}
            className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-xl py-4 font-semibold hover:shadow-xl transition-all shadow-md"
            onClick={(e) => {
              e.preventDefault();
              alert("This is a demo form. Your message will not be sent.");
            }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;
