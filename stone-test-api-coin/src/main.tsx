import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// 1. Importações do React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

// 2. Cria uma instância do QueryClient
// Esta instância armazena o cache de todas as consultas.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Define o tempo que o dado é considerado "fresco" antes de ser revalidado (5 minutos)
      staleTime: 1000 * 60 * 5, 
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 3. Envolve o App com o Provider */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);