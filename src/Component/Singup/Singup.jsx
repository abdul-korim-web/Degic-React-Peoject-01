import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-100 to-purple-50 px-4">
      <motion.div
        className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          Create an Account
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Sign up to get access to all features and stay updated.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#7E22CE" }}
            className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-xl py-4 font-semibold hover:shadow-xl transition-all shadow-md"
            onClick={(e) => {
              e.preventDefault();
              alert("This is a demo sign-up page.");
            }}
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-gray-600 mt-4">Or sign up with</p>
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-gray-700 text-3xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="text-blue-700 text-3xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#1877F2" }}
            className="text-blue-500 text-3xl"
          >
            <FaFacebook />
          </motion.a>
        </div>
        <p className="text-center text-gray-500 mt-6">
          Already have an account? <a href="/login" className="text-purple-900 font-semibold hover:underline">Log In</a>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUpPage;
