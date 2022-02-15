import React from "react";

import Heading from "../componants/Heading";
import Slider from "../componants/slider/Slider";

const TestimonialPage = () => {
  return (
    <>
      <section id="testimonial" className="">
        <div
          className="text-center mx-auto w-1/2 sm:w-1/3 xl:w-96 py-20 xl:py-20 text-slate-800"
          data-aos="fade-up"
        >
          <Heading value="Testimonials" />
        </div>
        <Slider />
      </section>
    </>
  );
};

export default TestimonialPage;
