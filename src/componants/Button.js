import React from "react";

const Button = (props) => {
  const { value, animation, delay, type } = props;
  return (
    <>
      <div className="group inline-block">
        <button
          className={`bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full text-white ease-in-out duration-500 group-hover:-translate-y-1 group-hover:shadow-lg`}
          data-aos={animation}
          data-aos-delay={delay}
          type={type}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default Button;
