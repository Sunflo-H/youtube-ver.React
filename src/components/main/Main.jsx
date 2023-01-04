import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Card from "./card/Card";

export default function Main() {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["popularVideos"],
    queryFn: getPopularVideos,
    staleTime: 5000,
  });

  const [title, setTitle] = useState("바람과함께사라지다");
  return (
    <ul>
      {}
      <Card />
      <li>카드</li>
      <li>카드</li>
      <li>카드</li>
      <li>카드</li>
      <li>카드</li>
    </ul>
  );
}

async function getPopularVideos() {
  let res = await fetch("data/popularVideos.json");
  let data = res.json();
  return data;
}
