import Head from "next/head";
import { useStore } from "hooks/useStore";
import { JSXElement } from "utils/UI_types";
import AppBar from "./AppBar";
import BottomBar from "./BottomBar";

const Layout = ({ children }: JSXElement) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  return (
    <div
      className={`min-h-screen w-full transition ease-linear
     ${darkmode ? "dark" : "light"}`}
    >
      <Head>
        <title>Laav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative flex h-full min-h-screen w-full flex-auto flex-col items-center justify-between bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        {/* The Header */}
        <AppBar />
        {/* The Main View */}
        <main className="flex h-full w-full flex-auto flex-col px-8">
          {children}
        </main>
        <BottomBar />
      </section>
    </div>
  );
};

export default Layout;
