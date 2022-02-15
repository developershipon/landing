import React from "react";

import Heading from "../componants/Heading";
import Blog from "../pages/componants/Blog";

const BlogPage = () => {
  return (
    <>
      <section
        id="blog"
        className="container py-2 sm:py-5 xl:pb-14 mt-6 sm:mt-12 mx-auto"
      >
        <div
          className="text-center mx-auto w-1/2 sm:w-1/3 xl:w-96 py-20 text-slate-800"
          data-aos="fade-up"
        >
          <Heading value="Blog Posts" />
        </div>
        <Blog />
      </section>
    </>
  );
};

export default BlogPage;
