import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

// App 컴포넌트 외부에서 QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 10,
    },
  },
});

function App() {
  return (
    <div className="App mx-auto h-full min-w-375pxr max-w-680pxr">
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen /> */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
