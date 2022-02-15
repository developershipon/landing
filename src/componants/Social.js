import React from "react";

const Social = (props) => {
  const { Link, icon } = props;
  return (
    <>
      <a className="hover:cursor-pointer" href={Link}>
        {icon}
      </a>
    </>
  );
};

export default Social;
