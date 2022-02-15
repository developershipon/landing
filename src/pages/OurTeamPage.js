import React from "react";
import Heading from "../componants/Heading";
import Para from "../componants/Para";
import Team from "../pages/componants/Team";

const OurTeamPage = () => {
  return (
    <>
      <section
        id="team"
        className="container py-10 sm:py-5 mt-6 sm:mt-12 mx-auto"
      >
        <div
          className="text-center mx-auto w-3/4 sm:w-2/3 xl:w-96 py-20 text-slate-800"
          data-aos="fade-up"
        >
          <Heading value="Our Team" />
          <Para value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero." />
        </div>
        <Team />
      </section>
    </>
  );
};

export default OurTeamPage;
