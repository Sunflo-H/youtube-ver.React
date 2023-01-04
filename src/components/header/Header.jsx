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
  return (
    <div className="flex w-4/6 bg-blue-500 m-auto">
      <div className="flex h-10">
        <FaYoutube className="text-2xl text-red-600 h-full " />
        <span className="text-2xl font-bold leading-9 pl-1">Youtube</span>
      </div>
      <div className="w-full">
        <form className="w-full flex h-10" onSubmit={handleSubmit}>
          <input
            type="text"
            className="h-10 bg-red-500 w-40 "
            value={text}
            onChange={handleChange}
          />
          <button className=" w-10 h-10 bg-blue-900 text-base ml-10">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
