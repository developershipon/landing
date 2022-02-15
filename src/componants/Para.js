import React from "react";

const Para = (props) => {
  const { value } = props;
  return (
    <>
      <p className="text-md text-slate-400 my-2">{value}</p>
    </>
  );
};

export default Para;
