import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { VideoContext } from "../../../context/VideoContext";

export default function Card({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();

  let format = getFormatDate(publishedAt);

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, {
      state: video,
    });
  };

  return (
    <li
      className=" basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5 p-1"
      key={video.id}
    >
      <div className="cursor-pointer" onClick={handleClick}>
        <img
          className=" w-full rounded-xl"
          src={thumbnails.medium.url}
          alt={title}
        ></img>

        <div className="font-bold line-clamp-2">{title}</div>
        <div className="text-sm p-1 opacity-80">{channelTitle}</div>
        <div className="text-sm ml-1 opacity-80">{format}</div>
      </div>
    </li>
  );
}

function getFormatDate(publishedAt) {
  // date 타입을 배열로 변환
  let arr = publishedAt.split("T");
  let date = arr[0].split("-");
  let time = arr[1].slice(0, -1).split(":");

  // 현재 시간과 동영상의 업로드시간을 비교하여 몇분,몇시간,몇일 전에 올라왔는지 판별
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

  // Intl API 를 이용하여 시간 포맷팅
  const formatter = new Intl.RelativeTimeFormat("en");
  let format;
  if (value_min > -60) format = formatter.format(value_min, "minute");
  else if (value_hour > -24) format = formatter.format(value_hour, "hour");
  else format = formatter.format(value_day, "day");

  return format;
}
