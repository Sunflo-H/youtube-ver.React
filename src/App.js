import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <QueryClientProvider client={queryClient}>
            <Main />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        ),
      },
      {
        path: "/videos",
        element: <div>비디오</div>,
        // Home 화면일때는 <Main> 기본적인 동영상리스트 보여주고
        // bts를 검색하면 <Main search=bts> 이런식으로 변형적인 동영상 리스트 보여주자
      },
      {
        path: "/videos/:search",
        element: <div>비디오 검색</div>,
      },
    ],
  },
  // {
  //   path: "/videos",
  //   element: <div>비디오</div>,
  // },
  // {
  //   path: "/videos/:id",
  //   element: <div>비티에스</div>,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
