import { useQuery } from "@tanstack/react-query";
import React from "react";
import Card from "./card/Card";

export default function Main() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["popularVideos"],
    queryFn: getPopularVideos,
    // staleTime: 5000,
  });
  let today = new Date();
  console.log(today.toString());

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

async function getPopularVideos() {
  let res = await fetch("data/popularVideos.json");
  let data = res.json();
  return data;
}
