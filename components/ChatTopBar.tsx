import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/hi";

import sampleAvatar from "../public/images/avatar.jpg";

type Props = {};

const ChatTopBar = (props: Props) => {
  return (
    <header className="_bg-theme w-full shadow-lg">
      <nav className="py-2 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Nav Left */}
          <div className="flex items-center justify-between gap-2">
            <Icons.HiChevronLeft className="_text-theme--hoverable mr-2 h-8 w-8" />
            <Link
              href="/profile"
              passHref
              className="flex items-center justify-center gap-2"
            >
              <span className="flex h-10 w-10">
                <Image
                  src={sampleAvatar}
                  alt="foo"
                  width={35}
                  height={35}
                  className="w-full rounded-full"
                />
              </span>
            </Link>
            <span className="flex text-xl font-semibold">Hussein Kizz</span>
          </div>
          {/* Nav Right */}
          <div className="flex items-center justify-center gap-2">
            <Icons.HiDotsVertical className="_text-theme--hoverable h-6 w-6" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ChatTopBar;
