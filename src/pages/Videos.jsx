import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/main/card/Card";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],

    queryFn: async () => {
      // return fetch(`/data/${keyword ? "search" : "popular"}.json`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     return keyword
      //       ? data.items.map((item) => {
      //           return { ...item, id: item.id.videoId };
      //         })
      //       : data.items;
      //   });
      return fetch(
        keyword
          ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyAfJbBrbKb1uxENbxnJrrJQLFwKBAfG744`
          : "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyAfJbBrbKb1uxENbxnJrrJQLFwKBAfG744&maxResults=25"
      )
        .then((res) => res.json())
        .then((data) => {
          return keyword
            ? data.items.map((item) => {
                return { ...item, id: item.id.videoId };
              })
            : data.items;
        });
    },
  });

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <ul className="flex flex-wrap">
        {videos &&
          videos.map((video, index) => <Card video={video} key={video.id} />)}
      </ul>
    </div>
  );
}
