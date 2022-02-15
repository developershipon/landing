import React from "react";

import Heading from "../componants/Heading";
import Contact from "../componants/forms/Contact";

const ContactPage = () => {
  return (
    <>
      <section
        id="contact"
        className="relative bg-hero bg-fixed bg-no-repeat bg-cover overflow-hidden"
      >
        <span className="absolute bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70 w-full h-full"></span>
        <div className="relative container sm:py-5 mt-6 sm:mt-12 mx-auto">
          <div
            className="text-center mx-auto w-1/2 sm:w-1/3 xl:w-96 py-10 xl:py-20 text-white"
            data-aos="fade-up"
          >
            <Heading value="Contact Us" />
          </div>
          <div className="w-full sm:w-8/12 xl:w-3/6 px-3 sm:px-0 mx-auto">
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
