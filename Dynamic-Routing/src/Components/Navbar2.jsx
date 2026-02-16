import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
    let navigate = useNavigate();
  return (
    <div className="flex py-3 px-6 bg-cyan-700 ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-black px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        return to home page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-black px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-black px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
