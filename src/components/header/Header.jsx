import React, { useState } from "react";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Set from "./set/Set";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
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
    <div className="flex w-4/6 h-14 py-2 max-w-7xl m-auto mb-5 border-b">
      <div className="flex  cursor-pointer" onClick={handleClick}>
        <FaYoutube className="text-5xl text-red-600 h-full " />
        <span className="text-2xl font-bold leading-9 pl-1">Youtube</span>
      </div>

      <form
        className="flex w-7/12 h-10 bg-green-400 m-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" w-full h-full outline-none px-2 border"
          value={text}
          onChange={handleChange}
        />
        <button className="w-10 h-full bg-gray-400">
          <FaSearch className="text-xl m-auto text-white" />
        </button>
      </form>
    </div>
  );
}
