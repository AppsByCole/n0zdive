import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>N0zdive</title>
        <meta name="description" content="N0zdive Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;