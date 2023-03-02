import { FC, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import TopNavbar from "@/components/TopNavbar";
import ErrorBoundary from "@/components/ErrorBoundary";

type Page<P = {}> = NextPage<P> & {
  PageTitle?: FC;
};

type Props = AppProps & {
  Component: Page;
};

const Layout: FC<Props> = ({ Component, pageProps }) => {
  const PageTitle = Component.PageTitle ?? (() => <></>);
  const { asPath } = useRouter();

  useEffect(() => {
    document.querySelector("body")!.classList.remove("classic");
  }, []);

  return (

        <main className="sm:pl-64 bg-background-light">
          <div className="px-4 py-2 sm:px-10 sm:py-10 text-foreground">
            <TopNavbar PageTitle={PageTitle} />
            <ErrorBoundary key={asPath}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </div>
        </main>
  );
};

export default Layout;
