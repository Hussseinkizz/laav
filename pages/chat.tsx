// import { Button } from '@material-tailwind/react';
import React from 'react';

type Props = {};

const chat = (props: Props) => {
  return (
    <section className="w-full h-full p-2 flex flex-auto flex-col">
      <h1 className="text-2xl text-center font-bold capitalize">
        {`Hello React, It's A Match`} 😜
      </h1>
      {/* <Button className="mt-4 mx-auto">Swipe Cards...</Button> */}
    </section>
  );
};

export default chat;
