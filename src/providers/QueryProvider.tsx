import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface QueryProviderProps {
    children: JSX.Element;
}

const QueryProvider = (props: QueryProviderProps) => (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
);

export default QueryProvider;
