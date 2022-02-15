import React from "react";

const Image = (props) => {
  const { img, alt, className } = props;
  return (
    <>
      <img
        src={img}
        alt={alt}
        className={`w-full h-full mx-auto ${className}`}
      />
    </>
  );
};

export default Image;
