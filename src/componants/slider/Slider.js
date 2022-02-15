import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import Para from "../Para";

const slider = [
  {
    id: 0,
    image:
      "https://preview.colorlib.com/theme/imagine/images/xperson_6.jpg.pagespeed.ic.sAuv9jH-0q.webp",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    user: "George Brook",
  },
  {
    id: 1,
    image:
      "https://preview.colorlib.com/theme/imagine/images/xperson_3.jpg.pagespeed.ic.RShAAJX8ye.webp",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    user: "Emely Hopson",
  },
  {
    id: 2,
    image: "images/author.png",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    user: "Will Turner",
  },
  {
    id: 3,
    image:
      "https://preview.colorlib.com/theme/imagine/images/xperson_1.jpg.pagespeed.ic.7rsO3E8HOL.webp",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
    user: "Will Turner",
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={true}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={600}
    >
      {slider.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full sm:w-4/6 xl:w-4/6 mx-auto select-none"
            data-aos="zoom-in"
          >
            <div className="w-24 h-24 mx-auto">
              <img
                className="rounded-full w-full h-full"
                src={slide.image}
                alt="User-img"
              />
            </div>
            <div className="w-3/4 mx-auto pb-10 text-center">
              <Para value={slide.des} />
              <h1 className="text-center my-5 text-slate-500 font-bold">
                {slide.user}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
