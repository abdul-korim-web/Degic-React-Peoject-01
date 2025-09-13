import React from 'react';
import { motion } from 'framer-motion';

const Illustrations = () => {
  return (
    <>
      <section className="Illustrations py-10 flex flex-col justify-center items-center space-y-6 md:space-y-10 md:py-20 bg-gray-200 ">
        <h1
          className='text-2xl font-semibold italic text-center md:text-3xl'
          style={{ fontFamily: "monospace" }}
        >
          Use illustrations in <span className='block md:inline text-blue-400'>UI Design</span>
        </h1>

        {/* Motion wrapper for animation */}
        <motion.video
          controls
          className='rounded-2xl w-[95%] md:w-[85%]'
          src="video/PageVideo.mp4"
          poster="image/maxresdefault (1).jpg" // Thumbnail
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </section>
    </>
  );
}

export default Illustrations;
