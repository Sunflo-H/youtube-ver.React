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

  if (error) return <p>{error}</p>;

  return (
    <ul className="flex w-96 bg-red-500">
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
