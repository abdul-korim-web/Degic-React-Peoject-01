import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BlogCardTamplate from "../BlogCardTamplate/BlogCardTamplate";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeBlog = () => {
  let native = useNavigate()
  const HomeBlogExploreAllBtn =()=>{
    native(`/project`)
  }
    const HomeBlogpost=[
        {
            image:"image/Group 41.png",
             title:"Make myspace your best designed space",
             des:"My company culture has changed today"
        },
        {
            image:"image/Group 41.png",
             title:"Make myspace your best designed space",
             des:"My company culture has changed today"
        },
        {
            image:"image/Group 41.png",
             title:"Make myspace your best designed space",
             des:"My company culture has changed today"
        },
    ];

  return (
    <>
      <section className="homeblog py-10">
        <div className="flex flex-wrap md:justify-between md:mx-20 md:items-end">
          <div className="flex flex-col space-y-5">
            <h2 className="font-semibold text-3xl w-[90%] font-mono md:text-4xl md:w-full">
              Get more from our blog
            </h2>
            <p className="text-sm text-gray-500 font-mono w-[85%] md:w-[50%] md:text-xl">
              There are a lot of different components that will help you create
              the perfect look for your project
            </p>
          </div>
          <div className="hidden md:flex">
            <Button onClick={HomeBlogExploreAllBtn}
              variant="contained"
              sx={{
                background: "#2AB691",
                borderRadius: "10px",
                padding: "5px 5px",
                width: "150px",
                fontWeight: "500",
                marginRight: "10px",
                height: "50px",
              }}
            >
              Explore All <ArrowForwardIcon />
            </Button>
          </div>
        </div>

        <div className="blogcard flex flex-wrap space-y-5 py-10 md:py-20 mt-10 bg-gray-200 md:justify-around md:items-center">
          {HomeBlogpost.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCardTamplate
                blogindex={index}
                blogheading={items.title}
                blogimage={items.image}
                blogdes={items.des}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeBlog;
