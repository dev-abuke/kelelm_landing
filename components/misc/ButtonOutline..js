import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-indigo-900 text-indigo-900 bg-white-500 outline-none rounded-lg capitalize hover:bg-indigo-900 hover:text-white-500 transition-all hover:shadow-indigo-100 ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
