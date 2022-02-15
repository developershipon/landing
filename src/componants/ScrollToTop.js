import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 5 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="fixed z-50 bottom-1 right-1" data-aos="fade-left">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-400 duration-100 ease-in-out text-white text-3xl"
        >
          <MdKeyboardArrowUp />
        </div>
      )}
    </div>
  );
}
