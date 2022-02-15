import React from "react";

import Heading from "../componants/Heading";
import Image from "../componants/Image";
import Para from "../componants/Para";
import List from "../componants/List";
import Button from "../componants/Button";

const AboutPage = () => {
  return (
    <>
      <section
        id="about"
        className="container py-10 sm:py-5 mt-6 sm:mt-12 mx-auto overflow-hidden"
      >
        <div
          className="text-center mx-auto w-1/3 xl:w-96 py-20 text-slate-800"
          data-aos="fade-up"
        >
          <Heading value="About Us" />
        </div>
        <div className="flex flex-row flex-wrap relative overflow-hidden px-3">
          <div className="w-full xl:w-4/6" data-aos="fade-right">
            <Image img="images/undraw_bookmarks_r6up.svg" alt="img" />
          </div>
          <div className="w-full xl:w-2/6 text-black">
            <h1 className="text-xl font-bold" data-aos="fade-up">
              Our Mission
            </h1>
            <div className="py-5" data-aos="fade-left">
              <Para
                value="Eos cumque optio dolores excepturi rerum temporibus magni
                recusandae eveniet, totam omnis consectetur maxime quibusdam
                expedita dolorem dolor nobis dicta labore quaerat esse magnam
                unde, aperiam delectus! At maiores, itaque."
              />
            </div>
            <div className="mb-10">
              <List />
            </div>
            <Button value="Learn More" animation="flip-right" delay="150" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
