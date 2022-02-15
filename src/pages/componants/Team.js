import React from "react";
import Image from "../../componants/Image";
import Para from "../../componants/Para";
import Social from "../../componants/Social";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const teams = [
  {
    id: 0,
    img: "https://preview.colorlib.com/theme/imagine/images/person_1.jpg",
    name: "Cloe Marena",
    position: "President",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 1,
    img: "https://preview.colorlib.com/theme/imagine/images/person_2.jpg",
    name: "John Rooster",
    position: "Marketing",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 2,
    img: "https://preview.colorlib.com/theme/imagine/images/person_3.jpg",
    name: "Will Turner",
    position: "Financing",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 3,
    img: "https://preview.colorlib.com/theme/imagine/images/person_4.jpg",
    name: "Nicolas Stainer",
    position: "Founder",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 4,
    img: "https://preview.colorlib.com/theme/imagine/images/person_5.jpg",
    name: "George Brook",
    position: "Financing",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
  {
    id: 5,
    img: "https://preview.colorlib.com/theme/imagine/images/person_6.jpg",
    name: "Nicolas Stainer",
    position: "Marketing",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.",
  },
];
const Team = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {teams.map((team) => (
          <div
            key={team.id}
            className="w-full sm:w-1/2 xl:w-1/3 my-5 md:my-8 overflow-hidden px-3"
            data-aos="zoom-in"
          >
            <div className="group overflow-hidden">
              <div className="relative overflow-hidden md:h-full w-full">
                <img
                  className="group-hover:scale-105 ease-in-out duration-300 w-full h-full overflow-hidden"
                  src={team.img}
                />
                <div className="absolute w-full py-5 overflow-hidden ease-in-out duration-300 text-transparent bg-blue-500 invisible group-hover:visible group-hover:-translate-y-14 group-hover:text-white flex justify-center gap-4">
                  <Social Link="#" icon={<FaFacebookF />} />
                  <Social Link="#" icon={<FaTwitter />} />
                  <Social Link="#" icon={<FaInstagram />} />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-black my-1">{team.name}</h1>
                <p className="text-blue-600">{team.position}</p>
                <div className="mt-5">
                  <Para value={team.des} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
