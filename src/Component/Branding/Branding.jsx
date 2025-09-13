import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Branding = () => {
    const [Index, setIndex] = useState(0);
    const Slider = [
        {des:"Best software platform for running an internet business."},
        {des:"🚀 Powerful tools to grow your online business effortlessly."},
        {des:"🌐 Smart solutions for building and scaling your digital brand."},
        {des:"💡 All-in-one platform to manage, market, and sell online."},
        {des:"📊 The simplest way to launch and grow your internet business."},
        {des:"⚡ Flexible and reliable platform for modern entrepreneurs."},
        {des:"🛠️ Everything you need to run your online business in one place."},
        {des:"🔑 Unlock growth with the most intuitive business platform."},
        {des:"🌟 Smart, fast, and scalable software for internet businesses."},
    ];

    let Nextdes = () => {
        setIndex((prev) => (prev + 1) % Slider.length);
    }

    let Previewdes = () => {
        setIndex((prev) => (prev - 1 + Slider.length) % Slider.length);
    }

    useEffect(() => {
        let AutoSlide = setInterval(() => {
            Nextdes();
        }, 7000);
        return () => clearInterval(AutoSlide);
    }, []);

    // Intro animation variants
    const introVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    // Slider text variants
    const sliderVariants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <>
            <section className="Branding flex flex-col py-20 px-5 space-y-5 md:flex-row md:-w-[1400px] md:mx-auto md:justify-around md:items-center">
                
                {/* left site with animation */}
                <motion.div
                    className='md:order-2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={introVariants}
                >
                    <img src="image/Group 35.png" alt="" />
                </motion.div>

                {/* Right Site with animation */}
                <motion.div
                    className='flex flex-col items-start space-y-4 md:order-1'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={introVariants}
                >
                    <div className='flex items-center '>
                        <img src="image/Shape.png" alt="Logo" />
                        <h2 className='text-xl font-semibold md:text-2xl'>Logo</h2>
                    </div>
                    <h2 className='text-2xl font-semibold w-full md:w-[80%] md:text-3xl'>
                        <span className='text-[#2AB691]'>“</span>Make more time for the work that matters most<span className='text-[#2AB691]'>“</span>
                    </h2>

                    <div className='text-sm w-[80%] text-gray-500 md:text-xl md:w-[60%] relative'>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={Index}
                                variants={sliderVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                            >
                                {Slider[Index].des}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className='flex space-x-4 items-center mt-4'>
                        <button onClick={Nextdes} className='bg-[#C4C4C4] rounded-full p-2 text-[#323232] cursor-pointer'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button onClick={Previewdes} className='bg-[#C4C4C4] rounded-full p-2 text-[#323232] cursor-pointer'>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </motion.div>
            

            </section>
        </>
    );
}

export default Branding;
