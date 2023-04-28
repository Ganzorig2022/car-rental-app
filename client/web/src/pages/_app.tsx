import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/apollo_client';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';
import Layout from '@/components/Layout/Layout';
import { RentalProvider } from '@/providers/rentalProvider';
import { AuthProvider } from '@/hooks/useAuth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <AuthProvider>
          <RentalProvider>
            <ThemeProvider attribute='class'>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RentalProvider>
        </AuthProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}
