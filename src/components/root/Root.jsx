import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
export default function Root() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
