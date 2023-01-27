// import Status from 'components/Status';
import CardControls from "components/CardControls";
import SwipeCard from "components/SwipeCard";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="_bg-theme-2 flex h-full w-full flex-auto flex-col items-center justify-center rounded-lg shadow-md md:rounded-none">
      <div className="flex w-full flex-auto flex-col items-center justify-center gap-4">
        <SwipeCard />
      </div>
    </section>
  );
};

export default Home;
