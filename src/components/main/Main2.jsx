import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "./card/Card";
import { useParams } from "react-router-dom";

export default function Main2() {
  const { searchId } = useParams();

  let queryOptions = {
    queryKey: ["searchVideos"],
    queryFn: getSearchVideos,
    // staleTime: 5000,
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["searchVideos"],
    queryFn: getSearchVideos,
  });

  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}gsdflkj</p>;

  return (
    <ul className="flex flex-wrap w-4/6 m-auto">
      {data.items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </ul>
  );
}

async function getSearchVideos() {
  let res = await fetch("data/searchVideos.json");
  let data = res.json();
  return data;
}

async function getPopularVideos() {
  let res = await fetch("data/popularVideos.json");
  let data = res.json();
  return data;
}
