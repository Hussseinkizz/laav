import { Zoom } from "react-reveal";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNumberFormat } from "../hooks/useNumberFormat";
import { useMakeSlug } from "../hooks/useMakeSlug";
import { getPublicUrl, getSignedUrl } from "../supabase-client";
import { BsPatchCheckFill, BsPatchCheck } from "react-icons/bs";

// import placeholder
import placeholder from "../public/images/placeholder.jpeg";

const Card = ({ post }) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [userNameSlug, setUserNameSlug] = useState("");
  const [signedUrl, setSignedUrl] = useState(null);

  const {
    id,
    user_id,
    width,
    height,
    location,
    price,
    image1_url,
    installments,
  } = post;

  const { user_name, avatar_url } = post.profiles;

  let title1 = `${location}`;
  let title2 = `- ${width} ku ${height}`;

  const getUserAvatar = async (url) => {
    const res = await getSignedUrl("avatars", url);
    // console.log('res', avatar_url, res);
    setSignedUrl(res);
  };

  useEffect(() => {
    if (post) {
      MakeSlug();
    }
    if (avatar_url) {
      getUserAvatar(avatar_url);
    }
  });

  const MakeSlug = () => {
    const { slug: userNameSlug } = useMakeSlug(user_name);
    setUserNameSlug(userNameSlug);
  };

  return (
    <Zoom>
      <div className="flex grow flex-col items-stretch justify-between overflow-hidden rounded-md bg-gray-50 shadow-lg">
        {/* Card Media */}
        <Link href={`/land/${id}`} passHref>
          <a>
            <div className="group relative flex h-60 w-full grow cursor-pointer">
              <Image
                src={image1_url ? getPublicUrl(image1_url) : placeholder}
                layout="fill"
                loading="lazy"
                objectFit="fill"
                alt={`Image of ${location}`}
                className={`w-full rounded-t-md transition duration-150 ease-linear hover:scale-105 hover:opacity-60 group-hover:scale-110 group-hover:opacity-75 ${
                  imageIsLoading
                    ? "blur-3xl grayscale"
                    : "blur-0 grayscale-0 transition-all duration-300 ease-in-out"
                }`}
                onLoadingComplete={() => setImageIsLoading(false)}
              />
              {/* The overlay content */}
              <div
                className={`absolute z-10 flex h-full w-full items-center justify-center truncate px-16 text-lg font-bold capitalize text-white transition duration-150 ease-linear hover:text-orange-300 md:text-xl ${
                  imageIsLoading
                    ? "animate-pulse bg-gradient-to-b from-orange-300 via-orange-200 to-orange-300 blur-3xl grayscale"
                    : "animate-none bg-transparent blur-0 grayscale-0 transition-all duration-300 ease-in-out"
                }`}
              >
                {!imageIsLoading && (
                  <div className="flex flex-auto flex-wrap items-center justify-center gap-2 rounded-md bg-black bg-opacity-25 px-4 py-2">
                    <span>{title1}</span>
                    <span>{title2}</span>
                  </div>
                )}
              </div>
            </div>
          </a>
        </Link>
        {/* Card Content */}
        <div className="flex grow flex-col justify-between gap-4">
          <div className="flex items-center justify-between gap-8 p-2">
            <Link
              // href={{
              //   pathname: '/user/[id]',
              //   query: { id: user_id },
              // }}
              // as={`/user/${userNameSlug}`}
              href={`/user/${user_id}`}
              passHref
            >
              <a className="group flex cursor-pointer items-center justify-start gap-2">
                <span className="h-14 w-12 rounded-sm md:h-16 md:w-14">
                  <Image
                    src={signedUrl ? signedUrl : placeholder}
                    layout="responsive"
                    objectFit="contain"
                    width={35}
                    height={40}
                    alt={`${user_name} 's photo`}
                    className="group-hover:opacity-85 w-full rounded-sm"
                  />
                </span>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-sm text-gray-600">Posted By:</span>
                  <span className="flex flex-auto flex-wrap truncate font-bold capitalize text-gray-800 transition hover:border-gray-600 group-hover:border-b group-hover:text-gray-600 sm:text-sm md:text-base">
                    {user_name}
                  </span>
                </div>
              </a>
            </Link>
            <h1 className="flex flex-col items-center justify-between font-bold sm:text-sm md:text-base">
              <span className="rounded-md border border-gray-300 px-2 text-xl text-gray-800 md:text-xl">
                {useNumberFormat(price)}
              </span>
              {!installments ? (
                <div className="flex items-center justify-center gap-2 text-green-500">
                  <BsPatchCheck />
                  <span>Full Price</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-500">
                  <BsPatchCheckFill />
                  <span>Kibanjampola</span>
                </div>
              )}
            </h1>
          </div>
          <Link href={`/land/${id}`} passHref>
            <a>
              <button className="flex w-full grow items-center justify-center rounded-b-md bg-orange-400 py-4 font-semibold uppercase text-orange-50 duration-150 ease-in-out hover:bg-orange-200 hover:text-orange-400 md:py-4">
                buy this land
              </button>
            </a>
          </Link>
        </div>
      </div>
    </Zoom>
  );
};

export default Card;
