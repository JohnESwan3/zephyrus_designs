import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zephyrus Designs | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Websites for small businesses and personal projects"
        />
      </Head>
      <main className="min-h-screen"></main>
    </div>
  );
};

export default Home;
