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
        <title>Hussein Kizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-full relative bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-800 min-h-screen flex flex-auto flex-col items-center justify-between">
        {/* The Header */}
        <AppBar />
        <main className="w-full flex-auto">
          {/* The Main View */}
          <section className="w-full h-full p-4">
            <div className="w-full shadow-lg rounded-md _surface-theme">
              {children}
            </div>
          </section>
        </main>
        <BottomBar />
      </section>
    </div>
  );
};

export default Layout;
