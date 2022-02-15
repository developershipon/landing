import React from "react";

const Title = (props) => {
  const { value } = props;
  return (
    <>
      <h1 className="lg:text-6xl text-3xl text-slate-800 font-bold my-2 text-">
        {value}
      </h1>
    </>
  );
};

export default Title;
