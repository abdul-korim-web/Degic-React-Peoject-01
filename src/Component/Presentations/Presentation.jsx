import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <>
      <section className="presentation bg-[#5F62E2] py-10 md:py-0 rounded-2xl mb-10 md:mb-20 md:justify-around items-center ">
        <motion.div
          className="flex flex-wrap flex-col-reverse gap-10 justify-center items-center md:flex-row md:justify-around  "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white md:text-4xl md:w-[70%] font-mono">
              The quickest way to create awesome presentation
            </h2>
            <div className="flex flex-wrap space-x-3">
              <Button
                variant="contained"
                sx={{
                  background: "#2AB691",
                  borderRadius: "10px",
                  padding: "10px 20+px",
                  fontWeight: "500",
                  marginRight: "10px",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#777AE6",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontWeight: "500",
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            <img src="image/bomb 1.png" alt="bomb 1.png" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Presentation;
