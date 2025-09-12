import { Toaster } from 'sonner';

const ToastProvider = () => {
  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 3000,
      }}
      theme='dark'
      richColors
    />
  );
};

export default ToastProvider;
