import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/layouts/Layout";
import { useTranslation } from "next-i18next";

const App = (props: AppProps) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("meta.titleFull")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout {...props} />
    </>
  );
};


export default appWithTranslation(App);
