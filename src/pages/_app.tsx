import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { css } from '@emotion/react';
import Head from '@/components/header';
import '@/styles/globals.css';
import { NaverMapProvider } from '@/contexts/naverMaps';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <Head />
      <Component {...pageProps} />
    </div>
  );
};

const App = (props: AppProps) => {
  return (
    <RecoilRoot>
      <NaverMapProvider>
        <MyApp {...props} />
      </NaverMapProvider>
    </RecoilRoot>
  );
};

export default App;
