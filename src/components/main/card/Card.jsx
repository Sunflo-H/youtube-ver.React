import React, { useEffect } from "react";

export default function Card({ item }) {
  // console.log(item);
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  const { viewCount } = item.statistics;
  let viewCount2 = Math.floor(viewCount / 1000) + "K";
  if (Math.floor(viewCount / 1000) >= 1000)
    viewCount2 = Math.floor(viewCount / 1000000) + "M";
  if (Math.floor(viewCount / 1000000) >= 1000)
    viewCount2 = Math.floor(viewCount / 1000000000) + "B";
  let arr = publishedAt.split("T");
  let date = arr[0].split("-");
  let time = arr[1].slice(0, -1).split(":");

  const formatter = new Intl.RelativeTimeFormat("en");

  const today = new Date();
  const targetDate = new Date(
    date[0],
    date[1] - 1, // 월은 0부터 계산하더라구 0:1월 1:2월
    date[2],
    time[0],
    time[1],
    time[2]
  );
  let calc = targetDate - today;

  let value_min = Math.ceil(calc / (1000 * 60));
  const value_hour = Math.ceil(calc / (1000 * 60 * 60));
  const value_day = Math.ceil(calc / (1000 * 60 * 60 * 24));
  if (value_min === 0) value_min = -1;

  let format;
  if (value_min > -60) format = formatter.format(value_min, "minute");
  else if (value_hour > -24) format = formatter.format(value_hour, "hour");
  else format = formatter.format(value_day, "day");

  return (
    <li className="basis-1/5 p-1 ">
      <div className="cursor-pointer ">
        <img
          className="w-full h-28 rounded-md"
          src={thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url}
        ></img>
        <div className="w-full text-xm leading-5 text-ellipsis overflow-hidden line-clamp-2 font-bold">
          {title}
        </div>
        <div className="w-44 text-sm text-ellipsis overflow-hidden whitespace-nowrap text-gray-500 mt-1">
          {channelTitle}
        </div>
        <div className="w-full text-sm text-gray-500">
          {viewCount2} views • {format}
        </div>
      </div>
    </li>
  );
}
