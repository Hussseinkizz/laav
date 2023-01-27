// import '../styles/fonts.module.css';
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../hooks/useStore";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Client Data Layer */}
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}

export default MyApp;
