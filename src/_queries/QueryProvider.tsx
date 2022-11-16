import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QeuryProvider {
    children: JSX.Element;
}

export default function QueryProvider({ children }: QeuryProvider) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
