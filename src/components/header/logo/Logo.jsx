import React from "react";
import { FaYoutube } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex border-red-500 border-2 h-10">
      <FaYoutube className="text-3xl text-red-600 border-red-500 border-2 h-full" />
      <span className="text-2xl">Youtube</span>
    </div>
  );
}
