import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Card from "../components/main/card/Card";

export default function Detail() {
  // const { videoId } = useParams();
  const video = useLocation();
  const { id: videoId } = video.state;
  const { channelId, channelTitle, description, title } = video.state.snippet;
  const opts = {
    height: "720",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],

    queryFn: async () => {
      return fetch(`/data/channel.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  const { data: related } = useQuery({
    queryKey: ["related", videoId],

    queryFn: async () => {
      return fetch(`/data/related.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });
  console.log(related && related);
  return (
    <div className="flex flex-col bg-red-500 lg:flex-row">
      <div className="basis-3/4 bg-blue-400">
        <YouTube videoId={videoId} opts={opts} />
        <div>{title}</div>
        <div>
          <img
            src={channel && channel[0].snippet.thumbnails.medium.url}
            alt={channelTitle}
          />
          <div>{channelTitle}</div>
        </div>
        <pre className="">{description}</pre>
      </div>
      <div className="basis-1/4 ">
        <ul className="">
          {related &&
            related.map((video) => <Card video={video} type="related" />)}
        </ul>
      </div>
    </div>
  );
}
