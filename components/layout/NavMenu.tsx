import * as Icons from "react-icons/hi";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { useStore } from "hooks/useStore";
import Button from "components/Button";

//! todo: fix react reveal typescript error!

const NavMenu = () => {
  const { setStore } = useStore();

  // close nav menu on item selection
  const onSelect = () => {
    setStore({
      type: "CLOSE_NAV",
    });
  };

  return (
    <>
      <Fade right>
        {/* <div className="fixed z-50 px-2 py-4 bg-orange-500 text-white rounded left-2 top-14 text-base shadow-lg"> */}
        <div className="absolute right-0 top-14 z-50 rounded border border-slate-800 bg-black bg-opacity-90 px-6 py-4 text-base text-white shadow-sm shadow-fuchsia-500">
          <div className="flex flex-col items-center justify-center gap-6 px-8">
            <Link
              href="/#about"
              passHref
              className="flex items-center justify-center gap-2"
              onClick={onSelect}
            >
              <span className="_navbar-link--hoverable">About</span>
            </Link>
            <Link
              href="/#projects"
              passHref
              className="flex items-center justify-center gap-2"
              onClick={onSelect}
            >
              <span className="_navbar-link--hoverable">Projects</span>
            </Link>
            <Link
              href="/#contact"
              passHref
              className="flex items-center justify-center gap-2"
              onClick={onSelect}
            >
              <span className="_navbar-link--hoverable">Contact</span>
            </Link>
            <Link
              href="/#services"
              passHref
              className="flex items-center justify-center gap-2"
              onClick={onSelect}
            >
              <span className="_navbar-link--hoverable">Services</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <Link
              href="/guestbook"
              passHref
              className="flex items-center justify-center gap-2"
              onClick={onSelect}
            >
              <span className="group flex items-center gap-2 bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-text text-lg font-semibold text-transparent transition-colors ease-linear hover:bg-gradient-to-r hover:from-rose-200 hover:via-fuchsia-300 hover:to-indigo-300 hover:bg-clip-text hover:text-transparent">
                <Icons.HiAnnotation className="h-6 w-6 text-rose-400 group-hover:text-rose-200" />
                Guest Book
              </span>
            </Link>
            <a
              download=""
              href="../../public/assets/Hussein_Kizza_August_2022.pdf"
            >
              <Button onClick={onSelect}>
                <Icons.HiArrowDown className="absolute left-0 mx-3 h-6 w-6 rounded-full bg-amber-400 p-1" />
                <span className="ml-6">Resume</span>
              </Button>
            </a>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default NavMenu;
