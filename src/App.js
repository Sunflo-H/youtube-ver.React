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

const queryClient = new QueryClient();
function App() {
  return (
    <div className="w-screen h-screen bg-green-500">
      <QueryClientProvider client={queryClient}>
        {/* 헤더 */}
        <Header />
        {/* 메인 */}
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
