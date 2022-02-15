import React from "react";
import Heading from "../../componants/Heading";
import Para from "../../componants/Para";
import Author from "../../componants/Author";
import Image from "../../componants/Image";

const Communicate1 = (props) => {
  const { order, animationimg, img, value, text, animation } = props;
  return (
    <>
      <div className="container mx-auto relativ flex flex-row flex-wrap justify-between overflow-hidden">
        <div
          className={`${order} w-full xl:w-4/6 px-3`}
          data-aos={animationimg}
        >
          <Image img={img} alt="image" />
        </div>
        <div
          className="w-full xl:w-2/6 px-5 text-slate-800 overflow-hidden"
          data-aos="fade-up"
        >
          <Heading value={value} />
          <Para value={text} />
          <div data-aos={animation}>
            <Author
              author="images/author.png"
              name="Grey Simpson"
              title="Co-Founder, XYZ Inc. "
              description="“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Communicate1;
