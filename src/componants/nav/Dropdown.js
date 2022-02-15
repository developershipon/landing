import React, { useState } from "react";

const Dropdown = ({ menu }) => {
  //change nav-bg color
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
      <ul
        className={
          "absolute flex flex-col py-5 shadow-md mt-2 z-50 cursor-pointer rounded-md" +
          (color ? " bg-blue-500" : " bg-blue-100")
        }
      >
        {menu.submenu.map((subitem, index) => {
          return (
            <li
              className="text-xs uppercase font-bold leading-snug top-12 px-3 py-2"
              key={index}
            >
              <a href={subitem.to}>{subitem.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
