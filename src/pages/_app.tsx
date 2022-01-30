import { AppProps } from 'next/app';
import { Component } from 'react';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
