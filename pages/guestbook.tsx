import Image from "next/image";
import * as Icons from "react-icons/hi";
import Fade from "react-reveal/Fade";

type Props = {};
import Avatar from "../public/assets/me.jpg";

const guestbook = (props: Props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // show sign up modal
    // signup user
    // then handle data
    // send to backend
  };

  return (
    <section className="bg-svg-pattern flex h-full w-full flex-auto px-24 py-16">
      <div className="flex w-full rounded-lg bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 p-1 text-white shadow-2xl">
        <div className="flex w-full flex-col gap-8 rounded-lg bg-black p-4">
          <div className="group flex items-center gap-2 bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-text text-lg font-semibold text-transparent transition-colors ease-linear hover:bg-gradient-to-r hover:from-rose-200 hover:via-fuchsia-300 hover:to-indigo-300 hover:bg-clip-text hover:text-transparent">
            <Icons.HiAnnotation className="h-6 w-6 text-rose-400 group-hover:text-rose-200" />
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row"
            >
              <textarea
                className="flex flex-auto rounded-lg bg-slate-600 px-2 py-1 text-slate-200 outline-none ring-2 ring-fuchsia-500 active:ring-indigo-500"
                name="guest-input"
                id="guest-input"
                placeholder="leave feedback!"
              ></textarea>
              <button className="flex gap-2 rounded-3xl py-2 px-4 shadow-md shadow-fuchsia-500 ring transition ease-linear hover:text-indigo-500 hover:shadow-lg hover:shadow-indigo-500">
                <Icons.HiPaperAirplane className="h-6 w-6 rotate-90 transform text-indigo-500" />
                Send
              </button>
            </form>
          </div>
          {/* The Guest FeedBack Item */}
          <div className="group relative flex flex-col items-start justify-between gap-8 rounded-lg bg-slate-900 p-4 shadow-lg">
            <Icons.HiMail className="absolute -right-2 -top-2 h-6 w-6 text-slate-600" />
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-4">
                <Fade left>
                  <span className="tinRightIn rounded-full border-transparent bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-border p-1 shadow-md shadow-fuchsia-500">
                    <Image
                      src={Avatar}
                      width={50}
                      height={50}
                      alt="Hussein Kizz Photo"
                      className="rounded-full bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 opacity-95 transition ease-linear hover:opacity-100"
                    />
                  </span>
                </Fade>
                <h3 className="text-lg font-semibold lg:text-xl">
                  Hussein Kizz
                </h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-slate-300">17 Jan 2023</span>
              </div>
            </div>
            <p className="foo">
              Well this your place to talk to me and everyone who visits here,
              {`it's`} all yours to express what you want, feel free. <br />{" "}
              Nice to have you here!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default guestbook;
