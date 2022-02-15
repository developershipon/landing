import React from "react";
import Para from "../../componants/Para";
const blogs = [
  {
    id: 0,
    img: "https://preview.colorlib.com/theme/imagine/images/img_1.jpg",
    title: "Make Your Business More Profitable",
    publisher: "Ham Brook ",
    time: "Jan 18, 2018",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 1,
    img: "https://preview.colorlib.com/theme/imagine/images/img_2.jpg",
    title: "Make Your Business More Profitable",
    publisher: "James Phelps ",
    time: "Jan 18, 2019",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 2,
    img: "https://preview.colorlib.com/theme/imagine/images/img_3.jpg",
    title: "Make Your Business More Profitable",
    publisher: "George Brook",
    time: "Jan 25, 2019",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 3,
    img: "https://preview.colorlib.com/theme/imagine/images/img_1.jpg",
    title: "Make Your Business More Profitable",
    publisher: "Nicolas Stainer",
    time: "Jan 18, 2019",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 4,
    img: "https://preview.colorlib.com/theme/imagine/images/img_2.jpg",
    title: "Make Your Business More Profitable",
    publisher: "Emely Hopson",
    time: "Feb 8, 2019",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 5,
    img: "https://preview.colorlib.com/theme/imagine/images/img_3.jpg",
    title: "Make Your Business More Profitable",
    publisher: "Will Turner",
    time: "Jan 18, 2019",
    catagory: "News",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
];
const Blog = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full sm:w-1/2 xl:w-1/3 my-8 overflow-hidden px-3 sm:px-3"
            data-aos="zoom-in"
          >
            <div className="group overflow-hidden">
              <div className="relative overflow-hidden h-full w-full text-slate-800">
                <img
                  className="group-hover:scale-105 ease-in-out duration-300 w-full h-full overflow-hidden"
                  src={blog.img}
                  alt="image"
                />
              </div>
              <h1 className="text-slate-800 text-3xl pt-5">{blog.title}</h1>{" "}
              <div className="my-4 text-slate-400">
                {blog.publisher}
                <span className="mx-2">•</span>
                {blog.time}
                <span className="mx-2">•</span>{" "}
                <a className="text-blue-500" href="#">
                  {blog.catagory}
                </a>
              </div>
              <div className="mt-5">
                <div className="mt-5">
                  <Para value={blog.des} />
                </div>
                <a className="text-blue-500" href="#">
                  Continue Reading...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
