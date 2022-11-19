import { type NextPage } from "next";
import Head from "next/head";

const Troubleshooter: NextPage = () => {
    return (
      <>
        <Head>
          <meta name="description" content="Drone Troubleshooting" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-500 to-zinc-800">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-400 sm:text-[5rem] select-none">
              Trouble <span className="text-red-600">.</span> Gone
            </h1>
            <p>
              Are you having trouble with your drone?
            </p>
            <p>
              Well we can figure this out together.
            </p>
            <p>
              Well we can figure this out together.
            </p>
          </div>
        </main>
      </>
    );
  };
  
  export default Troubleshooter;