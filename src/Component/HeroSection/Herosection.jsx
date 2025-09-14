import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
  let native = useNavigate()
  const GetStartedBtn = ()=>{
    native(`/service`)
  }
  const LearnMoreBtn =()=>{
    native(`/about`)
  }
  return (
    <>
      <section className="Hero flex flex-col justify-center items-center space-y-5 md:flex-row w-full md:px-20 md:justify-center pb-15 md:pb-20">
        
        {/* Hero Image */}
        <motion.div
          className="heroimage w-[80%] md:order-2 md:w-[50%]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src="/image/Heroimage.png" alt="Hero" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="herotext flex flex-col space-y-3 md:order-1 md:space-y-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Simply explained with illustrations
          </h2>
          <p className="text-sm text-gray-700 md:w-[80%]">
            There are a lot of different components that will help you create the perfect look for your project
          </p>

          {/* Buttons */}
          <motion.div
            className="hero-button flex flex-wrap md:flex-nowrap gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button onClick={GetStartedBtn}
                sx={{
                  background: "#5F62E2",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontWeight: "500",
                }}
                variant="contained"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button onClick={LearnMoreBtn}
                sx={{
                  background: "#5F62E226",
                  borderRadius: "10px",
                  color: "#5F62E2",
                  padding: "10px 20px",
                  fontWeight: "500",
                  border: "1px solid #5F62E2",
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

      </section>
    </>
  );
};

export default Herosection;
