import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function Card({ title }) {
  return (
    <div>
      <span className="text-3xl">{title}</span>
      {/* 썸네일 */}
      {/* 제목 */}
      {/* 채널명 */}
      {/* 시간 */}
    </div>
  );
}
