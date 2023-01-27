import Head from 'next/head';
import { useStore } from 'hooks/useStore';
import { JSXElement } from 'utils/UI_types';
import AppBar from './AppBar';
import BottomBar from './BottomBar';

const Layout = ({ children }: JSXElement) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  return (
    <div
      className={`w-full min-h-screen transition ease-linear
     ${darkmode ? 'dark' : 'light'}`}>
      <Head>
        <title>Laav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-full relative bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-800 min-h-screen flex flex-auto flex-col items-center justify-between">
        {/* The Header */}
        <AppBar />
        {/* The Main View */}
        <main className="w-full flex-auto">{children}</main>
        <BottomBar />
      </section>
    </div>
  );
};

export default Layout;
