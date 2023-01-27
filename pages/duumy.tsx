// import Status from 'components/Status';
import CardControls from 'components/CardControls';
import SwipeCard from 'components/SwipeCard';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className="w-full h-full flex flex-auto flex-col gap-4 justify-center items-center ">
      <div className="w-full px-4 mx-auto flex flex-col gap-4 justify-center items-center">
        {/* <Status /> */}
        <div className="relative w-full">
          <SwipeCard />
          <CardControls />
        </div>
      </div>
    </section>
  );
};

export default Home;
