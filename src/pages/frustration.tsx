import { type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

const Frustration: NextPage = () => {
  const [count, setCount] = useState(0)

  const incrimentCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Head>
        <meta name="description" content="Frustration Machine" />
      </Head>
      <main className="page">
        <div className="card">
          Annoying is my name
        </div>
        <p>{count}</p>
        <button onClick={incrimentCount}>Incriment phone number</button>
      </main>
    </>
  );
};

export default Frustration;