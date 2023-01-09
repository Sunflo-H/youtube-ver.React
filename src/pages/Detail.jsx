import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function Detail() {
  const { videoId } = useParams();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="flex bg-red-500">
      <div className="w-4/6 bg-blue-400">
        <YouTube videoId={videoId} opts={opts} />
        <div>채널정보</div>
      </div>
      <div className="w-2/6 bg-green-400">연관 비디오 리스트</div>
    </div>
  );
}
