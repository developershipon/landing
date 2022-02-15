import React from "react";
import {
  MdAutorenew,
  MdStoreMallDirectory,
  MdShoppingBasket,
  MdOutlineSettingsBackupRestore,
  MdOutlineSentimentSatisfied,
  MdPower,
} from "react-icons/md";

const cards = [
  {
    id: 0,
    heading: "Marketing Consulting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdAutorenew size={38} />,
    link: "https://www.google.com",
    animation: "fade-right",
  },
  {
    id: 1,
    heading: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdStoreMallDirectory size={38} />,
    link: "https://www.google.com",
    animation: "zoom-in",
  },
  {
    id: 2,
    heading: "Easy Purchase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdShoppingBasket size={38} />,
    link: "https://www.google.com",
    animation: "fade-left",
  },
  {
    id: 3,
    heading: "Free Updates",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdOutlineSettingsBackupRestore size={38} />,
    link: "https://www.google.com",
    animation: "fade-right",
  },
  {
    id: 4,
    heading: "100% Satistified",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdOutlineSentimentSatisfied size={38} />,
    link: "https://www.google.com",
    animation: "zoom-in",
  },
  {
    id: 5,
    heading: "Easy Plugin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    icon: <MdPower size={38} />,
    link: "https://www.google.com",
    animation: "fade-left",
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group w-full md:w-1/2 xl:w-1/3 my-8"
            data-aos={card.animation}
          >
            <div className="group-hover:bg-blue-500 bg-blue-100 py-2 px-8 m-5 text-center rounded-md ease-in-out duration-500 group-hover:-translate-y-1 shadow-lg group-hover:shadow-none">
              <div className="relative w-24 h-24 mx-auto -top-14">
                <div className="absolute">
                  <div className="p-5 group-hover:bg-blue-100 bg-blue-500 group-hover:shadow-md group-hover:text-blue-500 text-blue-100 ease-in-out duration-500 rounded-full">
                    {card.icon}
                  </div>
                </div>
              </div>
              <div className="relative -top-8">
                <h1 className="text-2xl group-hover:text-white text-blue-500 mb-5 ease-in-out duration-500">
                  {card.heading}
                </h1>
                <p className="text-sm leading-7 mb-5 text-slate-800 group-hover:text-white ease-in-out duration-500">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="text-md underline group-hover:no-underline text-slate-800 group-hover:text-slate-800 ease-in-out duration-500"
                >
                  <strong>Learn more</strong>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
