import React, { useEffect } from "react";

export default function Card({ item }) {
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  console.log(item.snippet.thumbnails);

  return (
    <li className="basis-1/5 p-1">
      <img
        className="w-full h-28"
        src={thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url}
      ></img>
      <div className="w-full text-xm leading-5 text-ellipsis overflow-hidden line-clamp-2 font-bold">
        {title}
      </div>
      <div className="w-44 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
        {channelTitle}
      </div>
      {/* 시간 */}
    </li>
  );
}
