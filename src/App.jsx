import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExchangeContainer from './containers/exchange/Exchange.container';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeContainer />
    </QueryClientProvider>
  );
}

export default App;
