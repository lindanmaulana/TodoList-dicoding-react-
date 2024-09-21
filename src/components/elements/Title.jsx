import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="text-lg font-bold text-primary border-b-2 border-primary ">
      {children}
    </h2>
  );
};

export default Title;
