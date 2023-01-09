import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { videoId } = useParams();
  console.log(videoId);
  return (
    <div className="flex bg-red-500">
      <div className="w-4/6 bg-blue-400">
        비디오 및 비디오 Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Maxime, a assumenda praesentium quae incidunt quo animi vel autem
        sit? Iure id amet magnam ducimus a sed obcaecati veniam expedita
        similique. 비디오 및 비디오 Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Maxime, a assumenda praesentium quae incidunt quo
        animi vel autem sit? Iure id amet magnam ducimus a sed obcaecati veniam
        expedita similique. 비디오 및 비디오 Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Maxime, a assumenda praesentium quae
        incidunt quo animi vel autem sit? Iure id amet magnam ducimus a sed
        obcaecati veniam expedita similique.
      </div>
      <div className="w-2/6 bg-green-400">연관 비디오 리스트</div>
    </div>
  );
}
