import { FC, useEffect } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import TopNavbar from '@/components/TopNavbar';
import { CssVarsProvider } from '@mui/joy/styles';
import { Card } from '@mui/joy';
import ColorInversionNavigation from '@/components/Sider';

type Page<P = {}> = NextPage<P> & {
  PageTitle?: FC;
};

type Props = AppProps & {
  Component: Page;
};

const Layout: FC<Props> = ({ Component, pageProps }) => {
  const PageTitle = Component.PageTitle ?? (() => <></>);
  return (
    <CssVarsProvider>
      <Card
        orientation="horizontal"
        sx={{
          height: '100%',
          width: '100%',
          margin: '0',
          padding: '0',
          variant: 'soft',
          position: 'fixed',
          zIndex: 1,
        }}
      >
        <ColorInversionNavigation />
        <div
          style={{
            width: '100%',
          }}
        >
          <TopNavbar PageTitle={PageTitle} />
          <div className="p-24">
            <Component {...pageProps} />
          </div>
        </div>
      </Card>
    </CssVarsProvider>
  );
};

export default Layout;
