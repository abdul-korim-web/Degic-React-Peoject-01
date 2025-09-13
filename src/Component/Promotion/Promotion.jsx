import React from 'react';
import { motion } from 'framer-motion';

const Promotion = () => {
    return (
        <>
          <section className='pb-3 md:pb-5 '>
                <div className='flex flex-wrap p-3 justify-around items-center space-x-2 space-y-3 '>
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Shape_2.png" 
                        alt="Google" 
                    />
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Shape_5 (1).png" 
                        alt="stripe" 
                    />
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.4 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Combined Shape.png" 
                        alt="Combined Shape" 
                    />
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.6 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Path.png" 
                        alt="" 
                    />
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.8 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Shape (1).png" 
                        alt="" 
                    />
                    <motion.img 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 1 }} 
                        className='w-[80px] md:w-[90px]' 
                        src="image/Shape_10.png" 
                        alt="" 
                    />
                </div>
            </section>  
        </>
    );
}

export default Promotion;
