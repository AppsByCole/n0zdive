import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Layout from "./components/Layout";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>N0zdive</title>
        <meta name="description" content="N0zdive Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col text-center">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
};

export default MyApp;