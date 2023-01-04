import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Card from "./card/Card";

export default function Main() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["popularVideos"],
    queryFn: getPopularVideos,
    // staleTime: 5000,
  });
  //   console.log(data.items);
  let today = new Date();
  console.log(today.toString());

  const [title, setTitle] = useState("바람과함께사라지다");
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <ul className="flex w-96 bg-red-500">
      {data.items.map((item, index) => (
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
