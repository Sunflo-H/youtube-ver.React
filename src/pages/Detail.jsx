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
    height: "640",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],

    queryFn: async () => {
      // return fetch(`/data/channel.json`)
      //   .then((res) => res.json())
      //   .then((data) => data.items);
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyAfJbBrbKb1uxENbxnJrrJQLFwKBAfG744`
      )
        .then((res) => res.json())
        .then((data) => data.items);
    },
  });

  const { data: related } = useQuery({
    queryKey: ["related", videoId],

    queryFn: async () => {
      // return fetch(`/data/related.json`)
      //   .then((res) => res.json())
      //   .then((data) => data.items);
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=AIzaSyAfJbBrbKb1uxENbxnJrrJQLFwKBAfG744`
      )
        .then((res) => res.json())
        .then((data) =>
          data.items.map((item) => ({ ...item, id: item.id.videoId }))
        );
    },
  });
  console.log(related);
  return (
    <div className="flex flex-col  lg:flex-row">
      <div className="basis-3/4  mx-4 ">
        <YouTube videoId={videoId} opts={opts} />
        <div className="text-xl font-bold my-4">{title}</div>
        <div className="flex items-center my-4">
          <img
            src={channel && channel[0].snippet.thumbnails.medium.url}
            alt={channelTitle}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="font-semibold">{channelTitle}</div>
        </div>
        <pre className="whitespace-pre-wrap">{description}</pre>
      </div>
      <div className="basis-1/4 ">
        <ul className="">
          {related &&
            related.map((video, index) => (
              <Card video={video} type="related" key={video.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}
