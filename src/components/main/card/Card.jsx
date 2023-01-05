import React, { useEffect } from "react";

export default function Card({ item }) {
  // const {snippet} = item;
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  // console.log(item);
  // snippet.thumbnails.standard로 썸네일 이미지 사용
  // snippet.channelTitle
  // snippet.publishedAt

  return (
    <li className="basis-1/5">
      {/* 썸네일 */}
      <div>
        <img src={thumbnails.standard.url}></img>
      </div>
      {/* 제목 */}
      <span className="text-3xl">{title}</span>
      {/* 채널명 */}
      <span>{channelTitle}</span>
      {/* 시간 */}
    </li>
  );
}
