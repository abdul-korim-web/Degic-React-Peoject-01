import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const FooterList = [
    {
      footerTitel: `Home`,
      footerLinks: [`Become Affiliate`, `Go Unlimited`, `Services`],
    },
    {
      footerTitel: `Products`,
      footerLinks: [
        `Design Systems`,
        `Themes & Templates`,
        `Mockups`,
        `Presentations`,
        `Wireframes Kits`,
        `UI Kits`,
      ],
    },
    {
      footerTitel: `Legals`,
      footerLinks: [`License`, `Refund Policy`, `About Us`, `Contacts`],
    },
    {
      footerTitel: `Blog`,
      footerLinks: [
        `Business Stories`,
        `Digital Store`,
        `Learning`,
        `Social Media`,
      ],
    },
  ];

  return (
    <>
      <section className="footer bg-black rounded-2xl mt-10 mb-2 md:flex md:justify-around md:items-start p-5">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="image/degic(1) 1.png" alt="degic logo" />
        </motion.div>

        {/* Links */}
        <div className="FooterLink flex flex-col justify-center items-center space-y-5 pb-10 md:flex-row md:space-x-10">
          {FooterList.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-5 py-5 px-5 border border-gray-300 rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }} // যতবার scroll করবেন ততবার animate হবে
            >
              <h2 className="text-white font-semibold font-mono italic text-xl">
                {item.footerTitel}
              </h2>
              <ul className="flex flex-col space-y-2">
                {item.footerLinks.map((linkItem, i) => (
                  <motion.li
                    className="text-gray-300 font-mono italic cursor-pointer hover:text-white transition-colors"
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {linkItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Copyright Section */}
      <motion.section
        className="Copyright flex bg-black rounded-2xl flex-wrap justify-center items-center gap-5 py-4 md:justify-around"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-gray-300 font-semibold font-mono italic">
            Copyright Degic © 2025 | Owner{" "}
            <a
              href="https://github.com/abdul-korim-web/" target="_blanck"
              className="text-[#2AB691] font-bold transition-all duration-300 hover:underline hover:decoration-wavy hover:text-white"
            >
              Abdul Korim
            </a>
          </h2>
        </div>
        <div className="text-white text-xl flex gap-4">
          <motion.button whileHover={{ scale: 1.2 }}>
            <a href="https://www.facebook.com/abdulkorimweb" target="_blanck">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }}>
            <a href="https://github.com/abdul-korim-web" target="_blanck">
              <i className="fa-brands fa-github"></i>
            </a>
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }}>
            <a href="https://www.linkedin.com/in/abdul-korim-web/" target="_blanck">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </motion.button>
        </div>
      </motion.section>
    </>
  );
};

export default Footer;
