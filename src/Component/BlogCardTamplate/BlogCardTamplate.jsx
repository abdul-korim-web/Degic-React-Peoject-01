import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogCardTamplate = (props) => {
    let Blogcardresponce =()=>{
        alert(`This is a Demo React Project . So blog card Not Responce View More Project ${`https://github.com/abdul-korim-web/abdul-korim-web`}`)
    }
  return (
    <>
      <div
        key={props.blogindex}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
      >
        <div>
          <img
            src={props.blogimage}
            alt={props.blogheading}
            className="rounded-t-2xl w-full h-40 object-cover"
          />
        </div>
        <div className="flex flex-col space-y-3 p-4">
          <h2 className="text-lg font-mono italic">{props.blogheading}</h2>
          <p className="text-gray-600 text-sm">{props.blogdes}</p>
          <Button onClick={Blogcardresponce}
            sx={{
              background: "#5F62E226",
              borderRadius: "10px",
              color: "#5F62E2",
              padding: "5px 10px",
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
            Show More <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogCardTamplate;
