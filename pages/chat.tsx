// import { Button } from '@material-tailwind/react';
import ChatBottomBar from "components/ChatBottomBar";
import ChatTopBar from "components/ChatTopBar";
import React from "react";

type Props = {};

const chat = (props: Props) => {
  return (
    <section className="relative flex min-h-screen w-full flex-auto flex-col items-center justify-between overflow-hidden bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <ChatTopBar />
      {/* The Chat */}
      <main className="flex h-full w-full flex-auto flex-col items-center justify-center py-4">
        <div className="flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          suscipit?
        </div>
      </main>
      <ChatBottomBar />
    </section>
  );
};

export default chat;
