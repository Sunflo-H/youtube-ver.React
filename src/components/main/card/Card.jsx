import React, { useEffect } from "react";

export default function Card({ item }) {
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  const { viewCount } = item.statistics;

  let vCount = getViewCount(viewCount);

  let format = getFormatDate(publishedAt);

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
          {vCount} views • {format}
        </div>
      </div>
    </li>
  );
}

function getViewCount(viewCount) {
  // viewCount가 1000, 1000000, 1000000000 일때 단위를 추가하여 리턴하는 함수
  let result = viewCount;

  if (viewCount >= 1000) result = Math.floor(viewCount / 1000) + "K";

  if (Math.floor(viewCount / 1000) >= 1000)
    result = Math.floor(viewCount / 1000000) + "M";

  if (Math.floor(viewCount / 1000000) >= 1000)
    result = Math.floor(viewCount / 1000000000) + "B";

  return result;
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
