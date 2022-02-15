import React from "react";

const Heading = (props) => {
  const { value } = props;
  return (
    <>
      <h1 className="lg:text-4xl text-3xl font-bold my-2 text-">{value}</h1>
    </>
  );
};

export default Heading;
