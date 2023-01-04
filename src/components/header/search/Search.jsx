import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="border-black border-2">
      <form>
        <input className="border-black border-2 w-10" />

        <button className="border-black border-2">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
