import Head from 'next/head';

import { useTranslation } from 'next-i18next';


function Test() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="text-foreground">{t('apy')}</div>
      </main>
    </>
  );
}

export { getStaticProps } from '@/utils/locales';
export default Test;
