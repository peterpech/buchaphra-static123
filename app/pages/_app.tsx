import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SessionProviderWrapper from '../components/SessionProviderWrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProviderWrapper>
      <Component {...pageProps} />
    </SessionProviderWrapper>
  );
}
