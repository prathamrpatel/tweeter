import { type AppType } from 'next/app';
import { api } from '~/utils/api';
import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
