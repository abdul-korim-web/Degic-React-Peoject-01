import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const MakeMoreTime = () => {
  return (
    <>
      <section className="maketimemore">
        <motion.div
          className="flex flex-wrap flex-col justify-center items-center py-10 md:py-20 md:flex-row md:justify-around "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }} // remove once: true
        >
          <div>
            <img src="image/Group 17.png" alt="Time Photo" />
          </div>
          <div className="flex flex-col space-y-4 py-4 items-start ">
            <h1 className="text-3xl w-[95%] font-semibold font-mono md:text-4xl md:w-[70%]">
              Make more time for the work
            </h1>
            <div className="flex flex-col space-y-2">
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Many ways to use illustrations in design</p>
              </div>
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Simply explained with illustrations</p>
              </div>
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Make more time for the work</p>
              </div>
            </div>
            <div>
              <Button
                sx={{
                  background: "#5F62E226",
                  borderRadius: "10px",
                  color: "#5F62E2",
                  padding: "5px 15px",
                  fontWeight: "500",
                  border: "1px solid #5F62E2",
                  transition: "all",
                  transitionDuration: "0.3s",
                  ":hover": {
                    background: "#5F62E2",
                    color: "white",
                    transform: "scale(1.05)",
                  },
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>

        {/* reverse section */}
        <motion.div
          className="flex flex-wrap flex-col justify-center items-center py-10 md:py-20 md:flex-row-reverse md:justify-around "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }} // remove once: true
        >
          <div>
            <img src="image/Group 22.png" alt="Time Photo" />
          </div>
          <div className="flex flex-col space-y-4 py-4 items-start ">
            <h1 className="text-3xl w-[95%] font-semibold font-mono md:text-4xl md:w-[70%]">
              Make more time for the work
            </h1>
            <div className="flex flex-col space-y-2">
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Many ways to use illustrations in design</p>
              </div>
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Simply explained with illustrations</p>
              </div>
              <div className="flex text-sm">
                <CheckCircleOutlineIcon sx={{ color: "#2AB691" }} />{" "}
                <p>Make more time for the work</p>
              </div>
            </div>
            <div>
              <Button
                sx={{
                  background: "#5F62E226",
                  borderRadius: "10px",
                  color: "#5F62E2",
                  padding: "5px 15px",
                  fontWeight: "500",
                  border: "1px solid #5F62E2",
                  transition: "all",
                  transitionDuration: "0.3s",
                  ":hover": {
                    background: "#5F62E2",
                    color: "white",
                    transform: "scale(1.05)",
                  },
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MakeMoreTime;
