import React from "react";
import Para from "./Para";

const Author = (props) => {
  const { author, name, title, description } = props;
  return (
    <>
      <div className="w-full py-5 bg-blue-100 border-l-8 border-blue-600 overflow-hidden pl-6 pr-14 drop-shadow-lg my-5">
        <div className="flex flex-row flex-wrap gap-5">
          <div className="w-12 h-12">
            <img className="rounded-full" src={author} alt="author" />
          </div>
          <div className="text-black">
            <strong>{name}</strong>
            <p>{title}</p>
          </div>
        </div>
        <div className="pr-5 mt-5">
          <Para value={description} />
        </div>
      </div>
    </>
  );
};

export default Author;
