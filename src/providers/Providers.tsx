'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import ToastProvider from './ToastProvider/ToastProvider';
// import Modal from '@/components/ui/Modal/Modal';
// import Cookies from 'js-cookie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastProvider />
      {/* <Modal /> */}
    </QueryClientProvider>
  );
};
