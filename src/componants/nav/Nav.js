import React, { useState } from "react";

import { MdMenu } from "react-icons/md";
import { menuItems } from "./menuItems";
import Image from "../Image";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [ishover, setIshover] = useState(-1);

  //change nav show/hide
  const [show, setShow] = useState(false);
  let prevScrollpos = window.pageYOffset;
  const changeShow = () => {
    if (prevScrollpos > window.pageYOffset) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeShow);
  //change nav color
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav
        className={
          `w-full flex flex-wrap items-center justify-between px-2 py-3 mb-3` +
          (color
            ? " fixed top-0 bg-blue-500 ease-in-out duration-500 z-50 text-white"
            : " bg-transparent text-slate-800 ease-in-out duration-500") +
          (show ? " top-0 ease-in-out duration-500" : " -top-full")
        }
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-xl"
              href=""
            >
              <Image
                img="images/Meta-Logo.png"
                alt="img"
                className="h-10 w-full"
              />
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MdMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex " : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              {menuItems.map((menu, index) => (
                <li className="nav-item" key={menu.id}>
                  <div
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug"
                    onMouseEnter={() => setIshover(index)}
                    onMouseLeave={() => setIshover(-1)}
                  >
                    <span className="ml-2">
                      <a href={menu.to}>{menu.title}</a>
                      {menu.submenu && (
                        <div
                          className={ishover == index ? " block" : " hidden"}
                        >
                          <Dropdown menu={menu} />
                        </div>
                      )}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
