// import Status from 'components/Status';
import CardControls from "components/CardControls";
import AppBar from "components/layout/AppBar";
import BottomBar from "components/layout/BottomBar";
import SwipeCard from "components/SwipeCard";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-auto flex-col items-center justify-between overflow-hidden bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Head>
        <title>Laav</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      {/* The Header */}
      <AppBar />
      {/* The Match Screen */}
      <main className="_bg-theme-2 flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <SwipeCard />
        </div>
      </main>
      <BottomBar />
    </section>
  );
};

export default Home;
