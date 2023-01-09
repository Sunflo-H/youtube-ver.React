import React, { useState } from "react";

import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  const handleClick = (e) => {
    navigate(`/`);
  };
  return (
    <header className="flex  p-4 border-b-2 mb-4">
      <div
        className="flex text-3xl items-center cursor-pointer"
        onClick={handleClick}
      >
        <FaYoutube className="text-youtube text-4xl mr-2" />
        <div className="font-bold">Youtube</div>
      </div>

      <form className="w-full flex justify-center " onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-7/12 border-2 border-r-0 rounded-xl rounded-r-none outline-none pl-4 text-xl"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="p-4 bg-gray-300 rounded-xl rounded-l-none">
          <FaSearch className="" />
        </button>
      </form>
      <div className="flex items-center text-xl text-gray-500">
        <AiFillSetting />
      </div>
    </header>
    // <div className="flex w-4/6 h-14 px-1 py-2 max-w-7xl m-auto mb-5 border-b ">
    //   <div className="flex  cursor-pointer" onClick={handleClick}>
    //     <FaYoutube className="text-5xl text-red-600 h-full " />
    //     <span className="text-2xl font-bold leading-9 pl-1">Youtube</span>
    //   </div>

    //   <form className="flex w-7/12 h-10 m-auto" onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       className=" w-full h-full outline-none px-2 border"
    //       value={text}
    //       onChange={handleChange}
    //     />
    //     <button className="w-10 h-full bg-gray-400">
    //       <FaSearch className="text-xl m-auto text-white" />
    //     </button>
    //   </form>
    //   <div className=" w-10 h-full pt-3">
    //     <AiFillSetting className="text-xl m-auto text-gray-400 cursor-pointer" />
    //   </div>
    // </div>
  );
}
