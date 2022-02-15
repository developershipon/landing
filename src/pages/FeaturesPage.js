import React from "react";

import Heading from "../componants/Heading";
import Para from "../componants/Para";
import Cards from "../pages/componants/Cards";
import Communicate from "../pages/componants/Communicate";

const FeaturesPage = () => {
  return (
    <>
      <section
        id="features"
        className="container py-10 sm:py-5 mt-6 sm:mt-12 mx-auto"
        id="features"
      >
        <div
          className="text-center mx-auto w-3/4 sm:w-2/3 xl:w-96 py-20 text-slate-800"
          data-aos="fade-up"
        >
          <Heading value="Imagine Features" />
          <Para value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero." />
        </div>
        <Cards />
      </section>
      <section className="container py-10 sm:py-5 mt-6 sm:mt-12 mx-auto">
        <Communicate
          img="images/undraw.svg"
          value="Communicate and gather feedback"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam."
          animationimg="fade-right"
          animation="fade-up"
        />
      </section>
      <section className="container py-10 sm:py-5 mt-6 sm:mt-12 mx-auto">
        <Communicate
          order="md:order-last"
          img="images/undraw_metric.svg"
          value="Communicate and gather feedback"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam."
          animationimg="fade-left"
          animation="fade-up"
        />
      </section>
    </>
  );
};

export default FeaturesPage;
