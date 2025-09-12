import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

const ModernPresentation = () => {
  const cardData = [
    {
      image: 'image/card1.png',
      alt: 'Managment',
      heading: 'Managment',
      Text: 'Software platform for running your new internet business',
    },
    {
      image: 'image/Group 4.png',
      alt: 'Entertainment',
      heading: 'Entertainment',
      Text: 'Software platform for running your new internet business',
    },
    {
      image: 'image/Group 4 (4).png',
      alt: 'Marketing',
      heading: 'Marketing',
      Text: 'Software platform for running your new internet business',
    },
    {
      image: 'image/card4.png',
      alt: 'References',
      heading: 'References',
      Text: 'Software platform for running your new internet business',
    },
  ];

  return (
    <section className="ModernPresentation bg-gray-200 rounded-2xl md:flex md:items-center md:justify-center md:w-[1400px] md:mx-auto overflow-hidden">
      {/* Left site */}
      <div className="grid grid-cols-1 space-y-4 justify-center items-center py-20 md:grid-cols-2 md:w-[50%]">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // Scroll-triggered animation
          >
            <div className="bg-white flex flex-col justify-center items-center p-5 rounded-2xl space-y-5 shadow-md hover:shadow-xl transition-all duration-300">
              <motion.img
                src={card.image}
                alt={card.alt}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <div className="text-center mt-2">
                <h2 className="text-xl font-semibold md:text-2xl">{card.heading}</h2>
                <p className="text-gray-500 mt-1">{card.Text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right site */}
      <motion.div
        className="flex flex-col space-y-3 md:ml-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }} // Scroll-triggered animation
      >
        <h2 className="text-2xl font-semibold md:text-4xl">
          The quickest way to create modern presentation
        </h2>
        <p className="text-sm text-gray-500 w-[90%]">
          Best software platform for running an internet business. We build the most powerful and
          flexible tools for internet commerce.
        </p>
        <Button
          sx={{
            background: '#5F62E226',
            borderRadius: '10px',
            color: '#5F62E2',
            width: '150px',
          }}
          size="medium"
          variant="outlined"
        >
          Learn More
        </Button>
        <div className="flex flex-col space-y-1 mt-5 md:justify-center">
          <div>
            <h2 className="text-xl md:text-2xl">Follow us</h2>
          </div>
          <div className="text-xl flex space-x-3 md:text-2xl">
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <i className="fa-brands fa-facebook"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <i className="fa-brands fa-github"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernPresentation;
