import React from "react";
import Button from "../componants/Button";
import Title from "../componants/Title";
import Para from "../componants/Para";
import Image from "../componants/Image";

const HomePage = () => {
  return (
    <>
      <section id="" className="sm:flex container mx-auto relative">
        <div className="xl:absolute xl:right-0 xl:px-3 w-full xl:w-auto">
          <Image img="images/icon-home-1.svg" alt="home" />
        </div>
        <div className="w-1/2 sm:py-60 relative px-3 mt-5 hidden xl:block">
          <Title value="Make Your Business More Profitable" />
          <div className="xl:pr-20">
            <Para value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia." />
          </div>

          <div className="mt-9">
            <Button value="Get Started" animation="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
