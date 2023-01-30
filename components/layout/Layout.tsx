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
      {children}
    </div>
  );
};

export default Layout;
