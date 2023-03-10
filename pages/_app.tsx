import '@/styles/globals.css';
import '@fontsource/public-sans';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/layouts/Layout';
import { useTranslation } from 'next-i18next';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider, EtherscanProvider } from '@ethersproject/providers';

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  return library;
}

const App = (props: AppProps) => {
  const { t } = useTranslation('common');

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout {...props} />
    </Web3ReactProvider>
  );
};

export default appWithTranslation(App);
