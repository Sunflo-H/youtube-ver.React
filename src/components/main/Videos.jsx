import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "./card/Card";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],

    queryFn: async () => {
      return fetch(`/data/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  console.log(videos);

  return (
    <div>
      <h1 className="text-2xl">비디오 {keyword ? ` 🔍 ${keyword}` : " 🔥"}</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <ul className="flex flex-wrap w-4/6 m-auto">
        {videos &&
          videos.map((item, index) => <Card item={item} key={index} />)}
      </ul>
    </div>
  );
}
