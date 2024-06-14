"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 0 } } });

  return (
    <QueryClientProvider client={queryClient}>
      {/*  <ReactQueryDevtools initialIsOpen={true} /> */}
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
