import Header from "./components/header/Header";
import Videos from "./components/main/Videos";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";

// const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:keyword",
        element: <Videos />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <Videos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
