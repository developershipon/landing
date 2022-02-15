import React from "react";
import { MdDone } from "react-icons/md";
const lists = [
  {
    id: 0,
    text: "Laborum enim quasi at modi",
  },
  {
    id: 2,
    text: "Ad at tempore",
  },
  {
    id: 3,
    text: "Labore quaerat esse",
  },
];
const List = () => {
  return (
    <>
      <ul>
        {lists.map((list) => (
          <li
            key={list.id}
            className="flex flex-row gap-5 my-2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span className="text-2xl text-blue-600">
              <MdDone />
            </span>
            <span className="text-slate-400">{list.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
